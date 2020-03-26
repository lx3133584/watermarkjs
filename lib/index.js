import { load, createImage, drawImage} from './image';
import Canvas from './canvas';
import {blob as mapToBlob} from './blob';
import * as style from './style';
import {clone, extend} from './object';

/**
 * A configuration type for the watermark function
 *
 * @typedef {Object} Options
 * @property {Function} init - an initialization function that is given Image objects before loading (only applies if resource is a collection of urls)
 * @property {ImageFormat} type - specify the image format to be used when retrieving result (only supports "image/png" or "image/jpeg", default "image/png")
 * @property {Number} quality - specify the image compression quality from 0 to 1 (default 0.92)
 * @property {String} id - Canvas id
 */

/**
 * @constant
 * @type {Options}
 */
const defaults = {
  init: () => {},
  type: 'png',
  quality: 1,
  id: 'watermark'
}

/**
 * Merge the given options with the defaults
 *
 * @param {Options} options
 * @return {Options}
 */
function mergeOptions(options) {
  return extend(clone(defaults), options);
}

/**
 * Return a watermark object
 *
 *
 * @param {String} resource - url, File objects, or Image objects
 * @param {Options} options - a configuration object for watermark
 * @param {Promise} promise - optional
 * @return {Object}
 */
let canvasUtils
export default function watermark(resource, options = {}, promise = null) {
  const opts = mergeOptions(options);
  if (!canvasUtils) {
    canvasUtils = new Canvas()
  }
  promise || (promise = canvasUtils.init(opts.id)
    .then(() => load(resource, opts.init, canvasUtils.get())))
    .then(image => drawImage(image, canvasUtils.get()));

  return {
    /**
     * Convert the watermarked image into a dataUrl. The draw
     * function is given the image as canvas elements in order
     *
     * @param {Function} draw
     * @return {Object}
     */
    draw(draw) {
      const promise = this
        .then(() => style.result(draw, canvasUtils.get()));

      return watermark(resource, opts, promise);
    },

    /**
     * Convert the watermark into a blob
     *
     * @param {Function} draw
     * @return {Object}
     */
    blob(draw) {
      const promise = this.draw(draw)
        .then(mapToBlob);

      return watermark(resource, opts, promise);
    },

    /**
     * Convert the watermark into an image using the given draw function
     *
     * @param {String} url
     * @param {Function} draw
     * @return {Object}
     */
    image(url, draw) {
      const promise = this
        .then(() => createImage(url))
        .then((res) => this.draw((target) => draw(target, res)));

      return watermark(resource, opts, promise);
    },

    /**
     * Convert the watermark into a text using the given draw function
     *
     * @param {Function} draw
     * @return {Object}
     */
    text(draw) {
      const promise = this.draw(draw);
      return watermark(resource, opts, promise);
    },

    /**
     * Delegate to the watermark promise
     *
     * @return {Promise}
     */
    then(...funcs) {
      return promise.then.apply(promise, funcs);
    },

    /**
     * Complete to the watermark promise
     *
     * @return {Promise}
     */
    exec(funcs = f => f) {
      return this.then(() => canvasUtils.dataUrl(canvasUtils.get(), { type: opts.type, quality: opts.quality, id: opts.id })).then(funcs);
    }
  };
};

/**
 * Style functions
 */
watermark.image = style.image;
watermark.text = style.text;

/**
 * Clean up all canvas references
 */
watermark.destroy = () => canvasUtils.release();
