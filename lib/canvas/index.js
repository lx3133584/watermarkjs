export default class Canvas {
  canvas = null;
  /**
    * Get a canvas
    *
    * @param {String} id Canvas id
    * @return {Promise<HTMLCanvasElement>}
    */
  init(id) {
    return new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery()
      query.select('#' + id)
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0].node
          if (canvas) {
            this.canvas = canvas
            this.release(canvas)
            resolve(canvas)
          } else {
            reject('can not find canvas')
          }
        })
    })
  }
  /**
    * Get a canvas
    *
    * @return {HTMLCanvasElement}
    */
  get() {
    return this.canvas;
  }
  /**
   * Get the data url of a canvas
   *
   * @param {HTMLCanvasElement}
   * @param {Paramters} Specifications according to HTMLCanvasElement.toDataURL() Documentation
   * @return {Promise<String>}
   */
  dataUrl(canvas, { type, quality, id }) {
    return new Promise((resolve, reject) => {
      const dpr = wx.getSystemInfoSync().pixelRatio;
      wx.canvasToTempFilePath({
        fileType: type,
        quality,
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
        destWidth: canvas.width * dpr,
        destHeight: canvas.height * dpr,
        canvasId: id,
        canvas,
        success(res) {
          resolve(res.tempFilePath);
        },
        fail: reject
      })
    })
  }

  /**
   * Return a canvas to the pool. This function will clear the canvas for reuse
   *
   * @param {HTMLCanvasElement} canvas
   * @return {String}
   */
  release(canvas) {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

}