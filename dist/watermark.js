(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["watermark"] = factory();
	else
		root["watermark"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).default;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ watermark; });

// NAMESPACE OBJECT: ./lib/style/image/index.js
var style_image_namespaceObject = {};
__webpack_require__.r(style_image_namespaceObject);
__webpack_require__.d(style_image_namespaceObject, "atPos", function() { return atPos; });
__webpack_require__.d(style_image_namespaceObject, "lowerRight", function() { return lowerRight; });
__webpack_require__.d(style_image_namespaceObject, "upperRight", function() { return upperRight; });
__webpack_require__.d(style_image_namespaceObject, "lowerLeft", function() { return lowerLeft; });
__webpack_require__.d(style_image_namespaceObject, "upperLeft", function() { return upperLeft; });
__webpack_require__.d(style_image_namespaceObject, "center", function() { return center; });

// NAMESPACE OBJECT: ./lib/style/text/index.js
var text_namespaceObject = {};
__webpack_require__.r(text_namespaceObject);
__webpack_require__.d(text_namespaceObject, "atPos", function() { return text_atPos; });
__webpack_require__.d(text_namespaceObject, "lowerRight", function() { return text_lowerRight; });
__webpack_require__.d(text_namespaceObject, "lowerLeft", function() { return text_lowerLeft; });
__webpack_require__.d(text_namespaceObject, "upperRight", function() { return text_upperRight; });
__webpack_require__.d(text_namespaceObject, "upperLeft", function() { return text_upperLeft; });
__webpack_require__.d(text_namespaceObject, "center", function() { return text_center; });

// CONCATENATED MODULE: ./lib/image/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Load an image by its url
 *
 * @param {String} url
 * @param {Function} init - an optional image initializer
 * @return {Promise}
 */
function load(url, init, canvas) {
  return createImage(url, init).then(function (res) {
    if (canvas._canvasRef) {
      canvas._canvasRef.style.width = res.width + 'px';
      canvas._canvasRef.style.height = res.height + 'px';
      canvas._canvasRef.width = res.width;
      canvas._canvasRef.height = res.height;
    } else {
      canvas.width = res.width;
      canvas.height = res.height;
    }

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

function createImage(url, onload) {
  return new Promise(function (resolve, reject) {
    wx.getImageInfo({
      src: url,
      success: function success(res) {
        var result = _objectSpread({}, res, {
          path: url
        });

        if (typeof onload === 'function') {
          onload(result);
        }

        resolve(result);
      },
      fail: reject
    });
  });
}
/**
 * Draw an image to a canvas element
 *
 * @param {Image} img
 * @param {HTMLCanvasElement} canvas
 * @param {Number} x - an x value
 * @param {Number} y - a y value
 * @param {String} image the path of image
 * @param {Number} width width of image
 * @param {Number} height height of image
 * @return {Promise}
 */

function drawImage(path, canvas) {
  var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var width = arguments.length > 4 ? arguments[4] : undefined;
  var height = arguments.length > 5 ? arguments[5] : undefined;
  var ctx = canvas.getContext('2d');
  var img = canvas.createImage();
  img.src = path;
  return new Promise(function (resolve, reject) {
    img.onload = function () {
      if (width && height) {
        ctx.drawImage(img, x, y, width, height);
      } else {
        ctx.drawImage(img, x, y);
      }

      resolve(canvas);
    };

    img.onerror = reject;
  });
}
// CONCATENATED MODULE: ./lib/canvas/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function canvas_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    canvas_defineProperty(this, "canvas", null);
  }

  _createClass(Canvas, [{
    key: "init",

    /**
      * Get a canvas
      *
      * @param {String} id Canvas id
      * @return {Promise<HTMLCanvasElement>}
      */
    value: function init(id) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var query = wx.createSelectorQuery();
        query.select('#' + id).fields({
          node: true,
          size: true
        }).exec(function (res) {
          var canvas = res[0].node;

          if (canvas) {
            _this.canvas = canvas;

            _this.release(canvas);

            resolve(canvas);
          } else {
            reject('can not find canvas');
          }
        });
      });
    }
    /**
      * Get a canvas
      *
      * @return {HTMLCanvasElement}
      */

  }, {
    key: "get",
    value: function get() {
      return this.canvas;
    }
    /**
     * Get the data url of a canvas
     *
     * @param {HTMLCanvasElement}
     * @param {Paramters} Specifications according to HTMLCanvasElement.toDataURL() Documentation
     * @return {Promise<String>}
     */

  }, {
    key: "dataUrl",
    value: function dataUrl(canvas, _ref) {
      var type = _ref.type,
          quality = _ref.quality,
          id = _ref.id;
      return new Promise(function (resolve, reject) {
        var dpr = wx.getSystemInfoSync().pixelRatio;
        wx.canvasToTempFilePath({
          fileType: type,
          quality: quality,
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height,
          destWidth: canvas.width * dpr,
          destHeight: canvas.height * dpr,
          canvasId: id,
          canvas: canvas,
          success: function success(res) {
            resolve(res.tempFilePath);
          },
          fail: reject
        });
      });
    }
    /**
     * Return a canvas to the pool. This function will clear the canvas for reuse
     *
     * @param {HTMLCanvasElement} canvas
     * @return {String}
     */

  }, {
    key: "release",
    value: function release(canvas) {
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }]);

  return Canvas;
}();


// CONCATENATED MODULE: ./lib/functions/index.js
/**
 * Return a function that executes a sequence of functions from left to right,
 * passing the result of a previous operation to the next
 *
 * @param {...funcs}
 * @return {Function}
 */
function sequence() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (value) {
    return funcs.reduce(function (val, fn) {
      return fn.call(null, val);
    }, value);
  };
}
/**
 * Return the argument passed to it
 *
 * @param {Mixed} x
 * @return {Mixed}
 */

function identity(x) {
  return x;
}
// CONCATENATED MODULE: ./lib/blob/index.js

var url = /^data:([^;]+);base64,(.*)$/;
/**
 * Split a data url into a content type and raw data
 *
 * @param {String} dataUrl
 * @return {Array}
 */

function split(dataUrl) {
  return url.exec(dataUrl).slice(1);
}
/**
 * Decode a base64 string
 *
 * @param {String} base64
 * @return {String}
 */

function decode(base64) {
  return window.atob(base64);
}
/**
 * Return a string of raw data as a Uint8Array
 *
 * @param {String} data
 * @return {UInt8Array}
 */

function uint8(data) {
  var length = data.length;
  var uints = new Uint8Array(length);

  for (var i = 0; i < length; i++) {
    uints[i] = data.charCodeAt(i);
  }

  return uints;
}
/**
 * Turns a data url into a blob object
 *
 * @param {String} dataUrl
 * @return {Blob}
 */

var blob_blob = sequence(split, function (parts) {
  return [decode(parts[1]), parts[0]];
}, function (blob) {
  return new Blob([uint8(blob[0])], {
    type: blob[1]
  });
});
// CONCATENATED MODULE: ./lib/style/image/index.js

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

function atPos(image, width, height, xFn, yFn, alpha) {
  alpha || (alpha = 1.0);
  return function (target) {
    var context = target.getContext('2d');
    context.globalAlpha = alpha || 1.0;
    return createImage(image).then(function (res) {
      var mark = {
        height: height || res.height,
        width: width || res.width
      };
      var x = xFn(target, mark);
      var y = yFn(target, mark);
      return drawImage(res.path, target, x, y, width, height);
    });
  };
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

function lowerRight(_ref) {
  var image = _ref.image,
      width = _ref.width,
      height = _ref.height,
      alpha = _ref.alpha,
      distance = _ref.distance;
  return atPos(image, width, height, function (target, mark) {
    return target.width - (mark.width + 20);
  }, function (target, mark) {
    return target.height - distance - mark.height || target.height - (mark.height + 20);
  }, alpha);
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

function upperRight(_ref2) {
  var image = _ref2.image,
      width = _ref2.width,
      height = _ref2.height,
      alpha = _ref2.alpha,
      distance = _ref2.distance;
  return atPos(image, width, height, function (target, mark) {
    return target.width - (mark.width + 20);
  }, function (target, mark) {
    return distance || 20;
  }, alpha);
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

function lowerLeft(_ref3) {
  var image = _ref3.image,
      width = _ref3.width,
      height = _ref3.height,
      alpha = _ref3.alpha,
      distance = _ref3.distance;
  return atPos(image, width, height, function (target, mark) {
    return 20;
  }, function (target, mark) {
    return target.height - distance - mark.height || target.height - (mark.height + 20);
  }, alpha);
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

function upperLeft(_ref4) {
  var image = _ref4.image,
      width = _ref4.width,
      height = _ref4.height,
      alpha = _ref4.alpha,
      distance = _ref4.distance;
  return atPos(image, width, height, function (target, mark) {
    return 20;
  }, function (target, mark) {
    return distance || 20;
  }, alpha);
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

function center(_ref5) {
  var image = _ref5.image,
      width = _ref5.width,
      height = _ref5.height,
      alpha = _ref5.alpha;
  return atPos(image, width, height, function (target, mark) {
    return (target.width - mark.width) / 2;
  }, function (target, mark) {
    return (target.height - mark.height) / 2;
  }, alpha);
}
// CONCATENATED MODULE: ./lib/style/text/index.js
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
function text_atPos(xFn, yFn, text, font, fillStyle, alpha, stroke, strokeStyle) {
  return function (target) {
    var context = target.getContext('2d');
    context.globalAlpha = alpha || 1.0;
    context.fillStyle = fillStyle || '#ffffff';
    context.font = font || '24px sans-serif';
    var metrics = context.measureText(text);
    var x = xFn(target, metrics, context);
    var y = yFn(target, metrics, context);

    if (stroke) {
      context.strokeStyle = strokeStyle || '#000000';
      context.strokeText(text, x, y);
    }

    context.fillText(text, x, y);
    return target;
  };
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

function text_lowerRight(_ref) {
  var text = _ref.text,
      font = _ref.font,
      fillStyle = _ref.fillStyle,
      alpha = _ref.alpha,
      stroke = _ref.stroke,
      strokeStyle = _ref.strokeStyle,
      distance = _ref.distance;
  return text_atPos(function (target, metrics) {
    return target.width - (metrics.width + 20);
  }, function (target) {
    return target.height - distance || target.height - 20;
  }, text, font, fillStyle, alpha, stroke, strokeStyle);
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

function text_lowerLeft(_ref2) {
  var text = _ref2.text,
      font = _ref2.font,
      fillStyle = _ref2.fillStyle,
      alpha = _ref2.alpha,
      stroke = _ref2.stroke,
      strokeStyle = _ref2.strokeStyle,
      distance = _ref2.distance;
  return text_atPos(function () {
    return 20;
  }, function (target) {
    return target.height - distance || target.height - 20;
  }, text, font, fillStyle, alpha, stroke, strokeStyle);
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

function text_upperRight(_ref3) {
  var text = _ref3.text,
      font = _ref3.font,
      fillStyle = _ref3.fillStyle,
      alpha = _ref3.alpha,
      stroke = _ref3.stroke,
      strokeStyle = _ref3.strokeStyle,
      distance = _ref3.distance;
  return text_atPos(function (target, metrics) {
    return target.width - (metrics.width + 20);
  }, function () {
    return distance || 20;
  }, text, font, fillStyle, alpha, stroke, strokeStyle);
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

function text_upperLeft(_ref4) {
  var text = _ref4.text,
      font = _ref4.font,
      fillStyle = _ref4.fillStyle,
      alpha = _ref4.alpha,
      stroke = _ref4.stroke,
      strokeStyle = _ref4.strokeStyle,
      distance = _ref4.distance;
  return text_atPos(function () {
    return 20;
  }, function () {
    return distance || 20;
  }, text, font, fillStyle, alpha, stroke, strokeStyle);
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

function text_center(_ref5) {
  var text = _ref5.text,
      font = _ref5.font,
      fillStyle = _ref5.fillStyle,
      alpha = _ref5.alpha,
      stroke = _ref5.stroke,
      strokeStyle = _ref5.strokeStyle;
  return text_atPos(function (target, metrics, ctx) {
    ctx.textAlign = 'center';
    return target.width / 2;
  }, function (target, metrics, ctx) {
    ctx.textBaseline = 'middle';
    return target.height / 2;
  }, text, font, fillStyle, alpha, stroke, strokeStyle);
}
// CONCATENATED MODULE: ./lib/style/index.js


var style_image = style_image_namespaceObject;
var style_text = text_namespaceObject;
/**
 * Create a DrawResult by apply a list of canvas elements to a draw function
 *
 * @param {Function} draw - the draw function used to create a DrawResult
 * @param {HTMLCanvasElement} canvas - the canvases used by the draw function
 * @return {Promise}
 */

function result(draw, canvas) {
  return draw.apply(null, [canvas]);
}
// CONCATENATED MODULE: ./lib/object/index.js
/**
 * Extend one object with the properties of another
 *
 * @param {Object} first
 * @param {Object} second
 * @return {Object}
 */
function extend(first, second) {
  var secondKeys = Object.keys(second);
  secondKeys.forEach(function (key) {
    return first[key] = second[key];
  });
  return first;
}
/**
 * Create a shallow copy of the object
 *
 * @param {Object} obj
 * @return {Object}
 */

function clone(obj) {
  return extend({}, obj);
}
// CONCATENATED MODULE: ./lib/index.js





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

var defaults = {
  init: function init() {},
  type: 'png',
  quality: 1,
  id: 'watermark'
};
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


var canvasUtils;
function watermark(resource) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var promise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var opts = mergeOptions(options);

  if (!canvasUtils) {
    canvasUtils = new Canvas();
  }

  promise || (promise = canvasUtils.init(opts.id).then(function () {
    return load(resource, opts.init, canvasUtils.get());
  }).then(function (image) {
    return drawImage(image, canvasUtils.get());
  }));
  return {
    /**
     * Convert the watermarked image into a dataUrl. The draw
     * function is given the image as canvas elements in order
     *
     * @param {Function} draw
     * @return {Object}
     */
    draw: function draw(_draw) {
      var promise = this.then(function () {
        return result(_draw, canvasUtils.get());
      });
      return watermark(resource, opts, promise);
    },

    /**
     * Convert the watermark into a blob
     *
     * @param {Function} draw
     * @return {Object}
     */
    blob: function blob(draw) {
      var promise = this.draw(draw).then(blob_blob);
      return watermark(resource, opts, promise);
    },

    /**
     * Convert the watermark into an image using the given draw function
     *
     * @param {Function} draw
     * @return {Object}
     */
    image: function image(draw) {
      var promise = this.draw(draw);
      return watermark(resource, opts, promise);
    },

    /**
     * Convert the watermark into a text using the given draw function
     *
     * @param {Function} draw
     * @return {Object}
     */
    text: function text(draw) {
      var promise = this.draw(draw);
      return watermark(resource, opts, promise);
    },

    /**
     * Delegate to the watermark promise
     *
     * @return {Promise}
     */
    then: function then() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return promise.then.apply(promise, funcs);
    },

    /**
     * Complete to the watermark promise
     *
     * @return {Promise}
     */
    exec: function exec() {
      var funcs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (f) {
        return f;
      };
      return promise.then(function () {
        return canvasUtils.dataUrl(canvasUtils.get(), {
          type: opts.type,
          quality: opts.quality,
          id: opts.id
        });
      }).then(funcs);
    }
  };
}
;
/**
 * Style functions
 */

watermark.image = style_image;
watermark.text = style_text;
/**
 * Clean up all canvas references
 */

watermark.destroy = function () {
  return canvasUtils.release();
};

/***/ })
/******/ ]);
});