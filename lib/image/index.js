/**
 * Used for loading image resources asynchronously and maintaining
 * the supplied order of arguments
 *
 * @param {String} resource - a url, File objects, or Image objects
 * @param {Function} init - called at the beginning of resource initialization
 * @return {Promise}
 */
export function load(resource, init, canvas) {
  const promise = loadUrl(resource, init, canvas);
  return promise;
}

/**
 * Load an image by its url
 *
 * @param {String} url
 * @param {Function} init - an optional image initializer
 * @return {Promise}
 */
export function loadUrl(url, init, canvas) {
  return createImage(url, init).then(res => {
    console.log(canvas, canvas._canvasRef)
    canvas._canvasRef.style.width = res.width + 'px';
    canvas._canvasRef.style.height = res.height + 'px';
    canvas._canvasRef.width = res.width;
    canvas._canvasRef.height = res.height;
    return res.path;
  });
}

/**
 * Create a new image, optionally configuring it's onload behavior
 *
 * @param {String} url
 * @param {Function} onload
 * @return {Promise<img>}
 */
export function createImage(url, onload) {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: url,
      success(res) {
        const result = { ...res, path: url }
        if (typeof (onload) === 'function') {
          onload(result);
        }
        resolve(result);
      },
      fail: reject
    })
  });
}

/**
 * Draw an image to a canvas element
 *
 * @param {Image} img
 * @param {HTMLCanvasElement} canvas
 * @return {Promise}
 */
export function drawImage(path, canvas) {
  const ctx = canvas.getContext('2d');
  const img = canvas.createImage();
  img.src = path;
  return new Promise((resolve, reject) => {
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      resolve(canvas);
    }
    img.onerror = reject
  })
}
