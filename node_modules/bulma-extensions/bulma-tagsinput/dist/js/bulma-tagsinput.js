(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bulmaTagsinput"] = factory();
	else
		root["bulmaTagsinput"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_type__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var KEY_BACKSPACE = 8,
    KEY_TAB = 9,
    KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_RIGHT = 39,
    KEY_DELETE = 46,
    KEY_COMMA = 188;

var bulmaTagsinput = function (_EventEmitter) {
	_inherits(bulmaTagsinput, _EventEmitter);

	function bulmaTagsinput(selector) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, bulmaTagsinput);

		var _this = _possibleConstructorReturn(this, (bulmaTagsinput.__proto__ || Object.getPrototypeOf(bulmaTagsinput)).call(this));

		_this.element = __WEBPACK_IMPORTED_MODULE_2__utils_type__["a" /* isString */](selector) ? document.querySelector(selector) : selector;
		// An invalid selector or non-DOM node has been provided.
		if (!_this.element) {
			throw new Error('An invalid selector or non-DOM node has been provided.');
		}
		_this._clickEvents = ['click'];

		/// Set default options and merge with instance defined
		_this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

		if (_this.element.dataset.hasOwnProperty('lowercase')) {
			_this.options.lowercase = _this.element.dataset('lowercase');
		}
		if (_this.element.dataset.hasOwnProperty('uppercase')) {
			_this.options.lowercase = _this.element.dataset('uppercase');
		}
		if (_this.element.dataset.hasOwnProperty('duplicates')) {
			_this.options.lowercase = _this.element.dataset('duplicates');
		}

		_this.init();
		return _this;
	}

	/**
   * Initiate all DOM element containing tagsinput class
   * @method
   * @return {Array} Array of all TagsInput instances
   */


	_createClass(bulmaTagsinput, [{
		key: 'init',
		value: function init() {
			if (!this.options.disabled) {
				this.tags = [];
				// The container will visually looks like an input
				this.container = document.createElement('div');
				this.container.className = 'tagsinput';
				this.container.classList.add('field');
				this.container.classList.add('is-grouped');
				this.container.classList.add('is-grouped-multiline');
				this.container.classList.add('input');

				var inputType = this.element.getAttribute('type');
				if (!inputType || inputType === 'tags') {
					inputType = 'text';
				}
				// Create an invisible input element so user will be able to enter value
				this.input = document.createElement('input');
				this.input.setAttribute('type', inputType);
				if (this.element.getAttribute('placeholder')) {
					this.input.setAttribute('placeholder', this.element.getAttribute('placeholder'));
				} else {
					this.input.setAttribute('placeholder', 'Add a Tag');
				}
				this.container.appendChild(this.input);

				var sib = this.element.nextSibling;
				this.element.parentNode[sib ? 'insertBefore' : 'appendChild'](this.container, sib);
				this.element.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;opacity:0.01;';
				this.element.tabIndex = -1;

				this.enable();
			}
		}
	}, {
		key: 'enable',
		value: function enable() {
			var _this2 = this;

			if (!this.enabled && !this.options.disabled) {

				this.element.addEventListener('focus', function () {
					_this2.container.classList.add('is-focused');
					_this2.select(Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop());
				});

				this.input.addEventListener('focus', function () {
					_this2.container.classList.add('is-focused');
					_this2.select(Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop());
				});
				this.input.addEventListener('blur', function () {
					_this2.container.classList.remove('is-focused');
					_this2.select(Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop());
					_this2.savePartial();
				});
				this.input.addEventListener('keydown', function (e) {
					var key = e.charCode || e.keyCode || e.which,
					    selectedTag = void 0,
					    activeTag = _this2.container.querySelector('.tag.is-active'),
					    last = Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop(),
					    atStart = _this2.caretAtStart(_this2.input);

					if (activeTag) {
						selectedTag = _this2.container.querySelector('[data-tag="' + activeTag.innerHTML.trim() + '"]');
					}
					_this2.setInputWidth();

					if (key === KEY_ENTER || key === _this2.options.delimiter.charCodeAt(0) || key === KEY_COMMA || key === KEY_TAB) {
						if (!_this2.input.value && (key !== _this2.options.delimiter.charCodeAt(0) || key === KEY_COMMA)) {
							return;
						}
						_this2.savePartial();
					} else if (key === KEY_DELETE && selectedTag) {
						if (selectedTag.nextSibling) {
							_this2.select(selectedTag.nextSibling.querySelector('.tag'));
						} else if (selectedTag.previousSibling) {
							_this2.select(selectedTag.previousSibling.querySelector('.tag'));
						}
						_this2.container.removeChild(selectedTag);
						_this2.tags.splice(_this2.tags.indexOf(selectedTag.getAttribute('data-tag')), 1);
						_this2.setInputWidth();
						_this2.save();
					} else if (key === KEY_BACKSPACE) {
						if (selectedTag) {
							if (selectedTag.previousSibling) {
								_this2.select(selectedTag.previousSibling.querySelector('.tag'));
							} else if (selectedTag.nextSibling) {
								_this2.select(selectedTag.nextSibling.querySelector('.tag'));
							}
							_this2.container.removeChild(selectedTag);
							_this2.tags.splice(_this2.tags.indexOf(selectedTag.getAttribute('data-tag')), 1);
							_this2.setInputWidth();
							_this2.save();
						} else if (last && atStart) {
							_this2.select(last);
						} else {
							return;
						}
					} else if (key === KEY_LEFT) {
						if (selectedTag) {
							if (selectedTag.previousSibling) {
								_this2.select(selectedTag.previousSibling.querySelector('.tag'));
							}
						} else if (!atStart) {
							return;
						} else {
							_this2.select(last);
						}
					} else if (key === KEY_RIGHT) {
						if (!selectedTag) {
							return;
						}
						_this2.select(selectedTag.nextSibling.querySelector('.tag'));
					} else {
						return _this2.select();
					}

					e.preventDefault();
					return false;
				});
				this.input.addEventListener('input', function () {
					_this2.element.value = _this2.getValue();
					_this2.element.dispatchEvent(new Event('input'));
				});
				this.input.addEventListener('paste', function () {
					return setTimeout(savePartial, 0);
				});

				this.container.addEventListener('mousedown', function (e) {
					_this2.refocus(e);
				});
				this.container.addEventListener('touchstart', function (e) {
					_this2.refocus(e);
				});

				this.savePartial(this.element.value);

				this.enabled = true;
			}
		}
	}, {
		key: 'disable',
		value: function disable() {
			if (this.enabled && !this.options.disabled) {
				this.reset();

				this.enabled = false;
			}
		}
	}, {
		key: 'select',
		value: function select(el) {
			var sel = this.container.querySelector('.is-active');
			if (sel) {
				sel.classList.remove('is-active');
			}
			if (el) {
				el.classList.add('is-active');
			}
		}
	}, {
		key: 'addTag',
		value: function addTag(text) {
			var _this3 = this;

			if (~text.indexOf(this.options.delimiter)) {
				text = text.split(this.options.delimiter);
			}
			if (Array.isArray(text)) {
				return text.forEach(function (text) {
					_this3.addTag(text);
				});
			}

			var tag = text && text.trim();
			if (!tag) {
				return false;
			}

			if (this.options['lowercase'] == 'true') {
				tag = tag.toLowerCase();
			}
			if (this.options['uppercase'] == 'true') {
				tag = tag.toUpperCase();
			}
			if (this.options['duplicates'] || this.tags.indexOf(tag) === -1) {
				this.tags.push(tag);

				var newTagWrapper = document.createElement('div');
				newTagWrapper.className = 'control';
				newTagWrapper.setAttribute('data-tag', tag);

				var newTag = document.createElement('div');
				newTag.className = 'tags';
				newTag.classList.add('has-addons');

				var newTagContent = document.createElement('span');
				newTagContent.className = 'tag';
				newTagContent.classList.add('is-active');
				this.select(newTagContent);
				newTagContent.innerHTML = tag;

				newTag.appendChild(newTagContent);
				if (this.options.allowDelete) {
					var newTagDeleteButton = document.createElement('a');
					newTagDeleteButton.className = 'tag';
					newTagDeleteButton.classList.add('is-delete');
					this._clickEvents.forEach(function (event) {
						newTagDeleteButton.addEventListener(event, function (e) {
							var selectedTag = void 0,
							    activeTag = e.target.parentNode,
							    last = Array.prototype.slice.call(_this3.container.querySelectorAll('.tag')).pop(),
							    atStart = _this3.caretAtStart(_this3.input);

							if (activeTag) {
								selectedTag = _this3.container.querySelector('[data-tag="' + activeTag.innerText.trim() + '"]');
							}

							if (selectedTag) {
								_this3.select(selectedTag.previousSibling);
								_this3.container.removeChild(selectedTag);
								_this3.tags.splice(_this3.tags.indexOf(selectedTag.getAttribute('data-tag')), 1);
								_this3.setInputWidth();
								_this3.save();
							} else if (last && atStart) {
								_this3.select(last);
							} else {
								return;
							}
						});
					});
					newTag.appendChild(newTagDeleteButton);
				}
				newTagWrapper.appendChild(newTag);

				this.container.insertBefore(newTagWrapper, this.input);
			}
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.tags.join(this.options.delimiter);
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this4 = this;

			Array.prototype.slice.call(this.container.querySelectorAll('.tag')).forEach(function (tag) {
				_this4.tags.splice(_this4.tags.indexOf(tag.innerHTML), 1);
				_this4.container.removeChild(tag);
			});
			this.savePartial(value);
		}
	}, {
		key: 'setInputWidth',
		value: function setInputWidth() {
			var last = Array.prototype.slice.call(this.container.querySelectorAll('.control')).pop();

			if (!this.container.offsetWidth) {
				return;
			}
			this.input.style.width = Math.max(this.container.offsetWidth - (last ? last.offsetLeft + last.offsetWidth : 30) - 30, this.container.offsetWidth / 4) + 'px';
		}
	}, {
		key: 'savePartial',
		value: function savePartial(value) {
			if (typeof value !== 'string' && !Array.isArray(value)) {
				value = this.input.value;
			}
			if (this.addTag(value) !== false) {
				this.input.value = '';
				this.save();
				this.setInputWidth();
			}
		}
	}, {
		key: 'save',
		value: function save() {
			this.element.value = this.tags.join(this.options.delimiter);
			this.element.dispatchEvent(new Event('change'));
		}
	}, {
		key: 'caretAtStart',
		value: function caretAtStart(el) {
			try {
				return el.selectionStart === 0 && el.selectionEnd === 0;
			} catch (e) {
				return el.value === '';
			}
		}
	}, {
		key: 'refocus',
		value: function refocus(e) {
			if (e.target.classList.contains('tag')) {
				this.select(e.target);
			}
			if (e.target === this.input) {
				return this.select();
			}
			this.input.focus();
			e.preventDefault();
			return false;
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.tags = [];
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.disable();
			this.reset();
			this.element = null;
		}
	}], [{
		key: 'attach',
		value: function attach() {
			var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input[type="tags"]';
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var instances = new Array();

			var elements = document.querySelectorAll(selector);
			[].forEach.call(elements, function (element) {
				setTimeout(function () {
					instances.push(new bulmaTagsinput(element, options));
				}, 100);
			});
			return instances;
		}
	}]);

	return bulmaTagsinput;
}(__WEBPACK_IMPORTED_MODULE_0__utils_events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (bulmaTagsinput);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
		disabled: false,
		delimiter: ',',
		allowDelete: true,
		lowercase: false,
		uppercase: false,
		duplicates: true
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
/* unused harmony export isDate */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(unknown) {
  return typeof unknown === 'string' || !!unknown && (typeof unknown === 'undefined' ? 'undefined' : _typeof(unknown)) === 'object' && Object.prototype.toString.call(unknown) === '[object String]';
};
var isDate = function isDate(unknown) {
  return (Object.prototype.toString.call(unknown) === '[object Date]' || unknown instanceof Date) && !isNaN(unknown.valueOf());
};

/***/ })
/******/ ])["default"];
});