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
 * Used for loading image resources asynchronously and maintaining
 * the supplied order of arguments
 *
 * @param {String} resource - a url, File objects, or Image objects
 * @param {Function} init - called at the beginning of resource initialization
 * @return {Promise}
 */
function load(resource, init, canvas) {
  var promise = loadUrl(resource, init, canvas);
  return promise;
}
/**
 * Load an image by its url
 *
 * @param {String} url
 * @param {Function} init - an optional image initializer
 * @return {Promise}
 */

function loadUrl(url, init, canvas) {
  return createImage(url, init).then(function (res) {
    console.log(canvas, canvas._canvasRef);
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
 * @return {Promise}
 */

function drawImage(path, canvas) {
  var ctx = canvas.getContext('2d');
  var img = canvas.createImage();
  img.src = path;
  return new Promise(function (resolve, reject) {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
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
          console.log(111111, id, canvas._canvasId, res);

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
        wx.canvasToTempFilePath({
          fileType: type,
          quality: quality,
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height,
          destWidth: canvas.width,
          destHeight: canvas.height,
          canvasId: canvas._canvasId,
          success: function success(res) {
            console.log(111, res);
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

var blob_url = /^data:([^;]+);base64,(.*)$/;
/**
 * Split a data url into a content type and raw data
 *
 * @param {String} dataUrl
 * @return {Array}
 */

function split(dataUrl) {
  return blob_url.exec(dataUrl).slice(1);
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
 * @param {Function} xFn - a function to determine an x value
 * @param {Function} yFn - a function to determine a y value
 * @param {Number} alpha
 * @return {Function}
 */
function atPos(xFn, yFn, alpha) {
  alpha || (alpha = 1.0);
  return function (target, img) {
    var context = target.getContext('2d');
    context.globalAlpha = alpha;
    context.drawImage(img.path, xFn(target, img), yFn(target, img));
    return target;
  };
}
/**
 * Place the watermark in the lower right corner of the target
 * image
 *
 * @param {Number} alpha
 * @return {Function}
 */

function lowerRight(alpha) {
  return atPos(function (target, mark) {
    return target.width - (mark.width + 10);
  }, function (target, mark) {
    return target.height - (mark.height + 10);
  }, alpha);
}
/**
 * Place the watermark in the upper right corner of the target
 * image
 *
 * @param {Number} alpha
 * @return {Function}
 */

function upperRight(alpha) {
  return atPos(function (target, mark) {
    return target.width - (mark.width + 10);
  }, function (target, mark) {
    return 10;
  }, alpha);
}
/**
 * Place the watermark in the lower left corner of the target
 * image
 *
 * @param {Number} alpha
 * @return {Function}
 */

function lowerLeft(alpha) {
  return atPos(function (target, mark) {
    return 10;
  }, function (target, mark) {
    return target.height - (mark.height + 10);
  }, alpha);
}
/**
 * Place the watermark in the upper left corner of the target
 * image
 *
 * @param {Number} alpha
 * @return {Function}
 */

function upperLeft(alpha) {
  return atPos(function (target, mark) {
    return 10;
  }, function (target, mark) {
    return 10;
  }, alpha);
}
/**
 * Place the watermark in the center of the target
 * image
 *
 * @param {Number} alpha
 * @return {Function}
 */

function center(alpha) {
  return atPos(function (target, mark) {
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
 * @return {Function}
 */
function text_atPos(xFn, yFn, text, font, fillStyle, alpha) {
  alpha || (alpha = 1.0);
  return function (target) {
    var context = target.getContext('2d');
    context.globalAlpha = alpha;
    context.fillStyle = fillStyle;
    context.font = font;
    var metrics = context.measureText(text);
    context.fillText(text, xFn(target, metrics, context), yFn(target, metrics, context));
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
 * @param {Number} y - height in text metrics is not very well supported. This is a manual value
 * @return {Function}
 */

function text_lowerRight(text, font, fillStyle, alpha, y) {
  return text_atPos(function (target, metrics) {
    return target.width - (metrics.width + 10);
  }, function (target) {
    return y || target.height - 10;
  }, text, font, fillStyle, alpha);
}
/**
 * Write text to the lower left corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Number} y - height in text metrics is not very well supported. This is a manual value
 * @return {Function}
 */

function text_lowerLeft(text, font, fillStyle, alpha, y) {
  return text_atPos(function () {
    return 10;
  }, function (target) {
    return y || target.height - 10;
  }, text, font, fillStyle, alpha);
}
/**
 * Write text to the upper right corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Number} y - height in text metrics is not very well supported. This is a manual value
 * @return {Function}
 */

function text_upperRight(text, font, fillStyle, alpha, y) {
  return text_atPos(function (target, metrics) {
    return target.width - (metrics.width + 10);
  }, function () {
    return y || 20;
  }, text, font, fillStyle, alpha);
}
/**
 * Write text to the upper left corner of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Number} y - height in text metrics is not very well supported. This is a manual value
 * @return {Function}
 */

function text_upperLeft(text, font, fillStyle, alpha, y) {
  return text_atPos(function () {
    return 10;
  }, function () {
    return y || 20;
  }, text, font, fillStyle, alpha);
}
/**
 * Write text to the center of the target canvas
 *
 * @param {String} text - the text to write
 * @param {String} font - same as the CSS font property
 * @param {String} fillStyle
 * @param {Number} alpha - control text transparency
 * @param {Number} y - height in text metrics is not very well supported. This is a manual value
 * @return {Function}
 */

function text_center(text, font, fillStyle, alpha, y) {
  return text_atPos(function (target, metrics, ctx) {
    ctx.textAlign = 'center';
    return target.width / 2;
  }, function (target, metrics, ctx) {
    ctx.textBaseline = 'middle';
    return target.height / 2;
  }, text, font, fillStyle, alpha);
}
// CONCATENATED MODULE: ./lib/style/index.js


var style_image = style_image_namespaceObject;
var style_text = text_namespaceObject;
/**
 * Create a DrawResult by apply a list of canvas elements to a draw function
 *
 * @param {Function} draw - the draw function used to create a DrawResult
 * @param {HTMLCanvasElement} canvas - the canvases used by the draw function
 * @return {HTMLCanvasElement}
 */

function result(draw, canvas) {
  draw.apply(null, [canvas]);
  return canvas;
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
  })).then(function (image) {
    return drawImage(image, canvasUtils.get());
  });
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
     * @param {String} url
     * @param {Function} draw
     * @return {Object}
     */
    image: function image(url, draw) {
      var _this = this;

      var promise = this.then(function () {
        return createImage(url);
      }).then(function (res) {
        return _this.draw(function (target) {
          return draw(target, res);
        });
      });
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
      return this.then(function () {
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