import { createImage, drawImage } from '../../image'
/**
 * Return a function for positioning a watermark on a target canvas
 *
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @param {Function} xFn - a function to determine an x value
 * @param {Function} yFn - a function to determine a y value
 * @param {Number} alpha
 * @param {Number} distance
 * @return {Promise}
 */
export function atPos(image, width, height, xFn, yFn, alpha) {
  alpha || (alpha = 1.0);
  return function (target) {
    const context = target.getContext('2d');

    context.globalAlpha = alpha;
    return createImage(image).then((res) => {
      const mark = { height: height || res.height, width: width || res.width };
      return drawImage(res.path, target, xFn(target, mark), yFn(target, mark), width, height)
    });
  }
}


/**
 * Place the watermark in the lower right corner of the target
 * image
 *
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @param {Number} alpha
 * @param {Number} distance
 * @return {Function}
 */
export function lowerRight(image, width, height, alpha, distance) {
  return atPos(
    image, width, height,
    (target, mark) => target.width - (mark.width + 20),
    (target, mark) => (target.height - distance - mark.height) || target.height - (mark.height + 20),
    alpha
  );
}

/**
 * Place the watermark in the upper right corner of the target
 * image
 *
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @param {Number} alpha
 * @param {Number} distance
 * @return {Function}
 */
export function upperRight(image, width, height, alpha, distance) {
  return atPos(
    image, width, height,
    (target, mark) => target.width - (mark.width + 20),
    (target, mark) => distance || 20,
    alpha
  );
}

/**
 * Place the watermark in the lower left corner of the target
 * image
 *
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @param {Number} alpha
 * @param {Number} distance
 * @return {Function}
 */
export function lowerLeft(image, width, height, alpha, distance) {
  return atPos(
    image, width, height,
    (target, mark) => 20,
    (target, mark) => (target.height - distance - mark.height) || target.height - (mark.height + 20),
    alpha
  );
}

/**
 * Place the watermark in the upper left corner of the target
 * image
 *
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @param {Number} alpha
 * @param {Number} distance
 * @return {Function}
 */
export function upperLeft(image, width, height, alpha, distance) {
  return atPos(
    image, width, height,
    (target, mark) => 20,
    (target, mark) => distance || 20,
    alpha
  );
}

/**
 * Place the watermark in the center of the target
 * image
 *
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @param {Number} alpha
 * @return {Function}
 */
export function center(image, width, height, alpha) {
  return atPos(
    image, width, height,
    (target, mark) => (target.width - mark.width) / 2,
    (target, mark) => (target.height - mark.height) / 2,
    alpha
  );
}
