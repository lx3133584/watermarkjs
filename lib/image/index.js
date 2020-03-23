import {identity} from '../functions'

/**
 * Set the src of an image object and call the resolve function
 * once it has loaded
 *
 * @param {Image} img
 * @param {String} src
 * @param {Function} resolve
 */
function setAndResolve(img, src, resolve) {
  img.onload = () => resolve(img);
  img.src = src;
}

/**
 * Given a resource, return an appropriate loading function for it's type
 *
 * @param {String|File|Image} resource
 * @return {Function}
 */
export function getLoader(resource) {
  const type = typeof(resource);

  if (type === 'string') {
    return loadUrl;
  }

  return loadFile;
}

/**
 * Used for loading image resources asynchronously and maintaining
 * the supplied order of arguments
 *
 * @param {Array} resources - a mixed array of urls, File objects, or Image objects
 * @param {Function} init - called at the beginning of resource initialization
 * @return {Promise}
 */
export function load(resources, init, pool) {
  let promises = [];
  return pool.pop().then(canvas => {
    for (var i = 0; i < resources.length; i++) {
      const resource = resources[i];
      const loader = getLoader(resource);
      const promise = loader(resource, init, canvas);
      promises.push(promise);
    }
    return Promise.all(promises);
  });
}

/**
 * Load an image by its url
 *
 * @param {String} url
 * @param {Function} init - an optional image initializer
 * @return {Promise}
 */
export function loadUrl(url, init, canvas) {
  const img = canvas.createImage();
  (typeof(init) === 'function') && init(img);
  return new Promise(resolve => {
    img.onload = () => resolve(img)
    img.src = url;
  });
}

/**
 * Return a collection of images from an
 * array of File objects
 *
 * @param {File} file
 * @return {Promise}
 */
export function loadFile(file, canvas) {
  const reader = new FileReader();
  return new Promise(resolve => {
    const img = canvas.createImage();
    reader.onloadend = () => setAndResolve(img, reader.result, resolve);
    reader.readAsDataURL(file);
  });
}

/**
 * Create a new image, optionally configuring it's onload behavior
 *
 * @param {String} url
 * @param {Function} onload
 * @return {Image}
 */
export function createImage(url, onload, canvas) {
  const img = canvas.createImage();
  if (typeof(onload) === 'function') {
    img.onload = onload;
  }
  img.src = url;
  return img;
}

/**
 * Draw an image to a canvas element
 *
 * @param {Image} img
 * @param {HTMLCanvasElement} canvas
 * @return {HTMLCanvasElement}
 */
function drawImage(img, canvas) {
  const ctx = canvas.getContext('2d');

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  return canvas;
}

/**
 * Convert an Image object to a canvas
 *
 * @param {Image} img
 * @param {HTMLCanvasElement} canvas
 * @return {HTMLCanvasElement}
 */
export function imageToCanvas(img, canvas) {
  return drawImage(img, canvas);
}

/**
 * Convert an array of image objects
 * to canvas elements
 *
 * @param {Array} images
 * @param {HTMLCanvasElement} canvas
 * @return {HTMLCanvasElement[]}
 */
export function mapToCanvas(images, canvas) {
  return images.map(img => imageToCanvas(img, canvas));
}
