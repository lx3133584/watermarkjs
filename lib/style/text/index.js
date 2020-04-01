/**
 * Return a function for positioning a watermark on a target canvas
 *
 * @param {Function} xFn - a function to determine an x value
 * @param {Function} yFn - a function to determine a y value
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha
 * @param {Boolean} stroke - Whether it has stroke
 * @param {Boolean} strokeStyle
 * @return {Function}
 */
export function atPos(xFn, yFn, text, font, fillStyle, alpha, stroke, strokeStyle) {
  return function (target) {
    const context = target.getContext('2d');
    context.globalAlpha = alpha || 1.0;
    context.fillStyle = fillStyle || '#ffffff';
    context.font = font || '24px sans-serif';
    const metrics = context.measureText(text);
    const x = xFn(target, metrics, context);
    const y = yFn(target, metrics, context);
    
    if (stroke) {
      context.strokeStyle = strokeStyle || '#000000';
      context.strokeText(text, x, y);
    }
    
    context.fillText(text, x, y);
    return target;
  }
}

/**
 * Write text to the lower right corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Boolean} stroke - Whether it has stroke
 * @param {Boolean} strokeStyle
 * @param {Number} distance
 * @return {Function}
 */
export function lowerRight({text, font, fillStyle, alpha, stroke, strokeStyle, distance}) {
  return atPos(
    (target, metrics) => target.width - (metrics.width + 20),
    target => (target.height - distance) || (target.height - 20),
    text,
    font,
    fillStyle,
    alpha,
    stroke,
    strokeStyle
  );
}

/**
 * Write text to the lower left corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Boolean} stroke - Whether it has stroke
 * @param {Boolean} strokeStyle
 * @param {Number} distance
 * @return {Function}
 */
export function lowerLeft({text, font, fillStyle, alpha, stroke, strokeStyle, distance}) {
  return atPos(
    () => 20,
    target => (target.height - distance) || (target.height - 20),
    text,
    font,
    fillStyle,
    alpha,
    stroke,
    strokeStyle
  );
}

/**
 * Write text to the upper right corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Boolean} stroke - Whether it has stroke
 * @param {Boolean} strokeStyle
 * @param {Number} distance
 * @return {Function}
 */
export function upperRight({text, font, fillStyle, alpha, stroke, strokeStyle, distance}) {
  return atPos(
    (target, metrics) => target.width - (metrics.width + 20),
    () => distance || 20,
    text,
    font,
    fillStyle,
    alpha,
    stroke,
    strokeStyle
  );
}

/**
 * Write text to the upper left corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Boolean} stroke - Whether it has stroke
 * @param {Boolean} strokeStyle
 * @param {Number} distance
 * @return {Function}
 */
export function upperLeft({text, font, fillStyle, alpha, stroke, strokeStyle, distance}) {
  return atPos(
    () => 20,
    () => distance || 20,
    text,
    font,
    fillStyle,
    alpha,
    stroke,
    strokeStyle
  );
}

/**
 * Write text to the center of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Boolean} stroke - Whether it has stroke
 * @param {Boolean} strokeStyle
 * @return {Function}
 */
export function center({ text, font, fillStyle, alpha, stroke, strokeStyle}) {
  return atPos(
    (target, metrics, ctx) => {ctx.textAlign = 'center'; return  target.width / 2;},
    (target, metrics, ctx) => {ctx.textBaseline = 'middle'; return target.height / 2; },
    text,
    font,
    fillStyle,
    alpha,
    stroke,
    strokeStyle
  );
}
