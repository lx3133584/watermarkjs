import * as img from './image';
import * as txt from './text';

export const image = img;
export const text = txt;

/**
 * Create a DrawResult by apply a list of canvas elements to a draw function
 *
 * @param {Function} draw - the draw function used to create a DrawResult
 * @param {HTMLCanvasElement} canvas - the canvases used by the draw function
 * @return {Promise}
 */
export function result(draw, canvas) {
  return draw.apply(null, [canvas]);
}
