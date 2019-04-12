(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bulmaIconpicker"] = factory();
	else
		root["bulmaIconpicker"] = factory();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(2);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var fetchStyle = function fetchStyle(url) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = function () {
      resolve();
    };
    link.href = url;

    if (!document.querySelector('link[href="' + url + '"]')) {
      var headScript = document.querySelector('head');
      headScript.append(link);
    }
  });
};

var bulmaIconpicker = function (_EventEmitter) {
  _inherits(bulmaIconpicker, _EventEmitter);

  function bulmaIconpicker(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaIconpicker);

    var _this = _possibleConstructorReturn(this, (bulmaIconpicker.__proto__ || Object.getPrototypeOf(bulmaIconpicker)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

    _this.icons = [];
    _this.id = 'iconPicker' + new Date().getTime();
    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaIconpicker, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.createModal();
      this.createPreview();

      this.options.iconSets.forEach(function (iconSet) {
        fetchStyle(iconSet.css);
        // Parse CSS file to get array of all available icons
        fetch(iconSet.css, { mode: 'cors' }).then(function (res) {
          return res.text();
        }).then(function (css) {
          _this2.icons[iconSet.name] = _this2.parseCSS(css, iconSet.prefix || 'fa-', iconSet.displayPrefix || '');
          _this2.modalSetTabs.querySelector('a').click();
          var touchEvent = new Event('touchstart');
          _this2.modalSetTabs.querySelector('a').dispatchEvent(touchEvent);
        });
      });
    }
  }, {
    key: 'createPreview',
    value: function createPreview() {
      var _this3 = this;

      this.preview = document.createElement('div');
      this.preview.className = 'icon is-large';
      this.preview.classList.add('iconpicker-preview');
      var iconPreview = document.createElement('i');
      iconPreview.className = 'iconpicker-icon-preview';
      if (this.element.value.length) {
        var classes = this.element.value.split(' ');
        classes.forEach(function (cls) {
          iconPreview.classList.add(cls);
        });
      }
      this.preview.appendChild(iconPreview);

      this._clickEvents.forEach(function (event) {
        _this3.preview.addEventListener(event, function (e) {
          e.preventDefault();

          _this3.modal.classList.add('is-active');
        });
      });

      this.element.parentNode.insertBefore(this.preview, this.element.nextSibling);
    }
  }, {
    key: 'parseCSS',
    value: function parseCSS(css) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-';
      var displayPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var iconPattern = new RegExp('\\.' + prefix + '([^\\.!:]*)::?before\\s*{\\s*content:\\s*["|\']\\\\[^\'|"]*["|\'];?\\s*}', 'g');
      var index = 1;
      var icons = [],
          icon = void 0,
          match = void 0;

      while (match = iconPattern.exec(css)) {
        icon = {
          prefix: prefix,
          selector: prefix + match[index].trim(':'),
          name: this.ucwords(match[index]).trim(':'),
          filter: match[index].trim(':'),
          displayPrefix: displayPrefix
        };
        icons[match[index]] = icon;
      }

      if (Object.getOwnPropertyNames(this.icons).length == 0) {
        console.warn("No icons found in CSS file");
      }
      return icons;
    }
  }, {
    key: 'ucwords',
    value: function ucwords(str) {
      return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
      });
    }
  }, {
    key: 'drawIcons',
    value: function drawIcons(iconSet) {
      this.iconsList.innerHTML = '';

      if (iconSet) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(iconSet)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var iconName = _ref2[0];
            var icon = _ref2[1];

            this.iconsList.appendChild(this.createIconPreview(icon));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'createIconPreview',
    value: function createIconPreview(icon) {
      var _this4 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-';

      var iconLink = document.createElement('a');
      iconLink.dataset.title = icon['name'];
      iconLink.setAttribute('title', icon['name']);
      iconLink.dataset.icon = icon['selector'];
      iconLink.dataset.filter = icon['filter'];
      var iconPreview = document.createElement('i');
      iconPreview.className = 'iconpicker-icon-preview';
      if (icon['displayPrefix'].length) {
        prefix = icon['displayPrefix'].split(' ');
        prefix.forEach(function (pfx) {
          iconPreview.classList.add(pfx);
        });
      }
      iconPreview.classList.add(icon['selector']);
      iconLink.appendChild(iconPreview);
      this._clickEvents.forEach(function (event) {
        iconLink.addEventListener(event, function (e) {
          e.preventDefault();
          _this4.preview.innerHTML = '';
          _this4.element.value = e.target.classList;
          _this4.preview.appendChild(e.target.cloneNode(true));
          _this4.modal.classList.remove('is-active');
        });
      });
      return iconLink;
    }
  }, {
    key: 'createModal',
    value: function createModal() {
      var _this5 = this;

      this.modal = document.createElement('div');
      this.modal.className = 'modal';
      this.modal.classList.add('iconpicker-modal');
      this.modal.id = this.id;
      var modalBackground = document.createElement('div');
      modalBackground.className = 'modal-background';
      var modalCard = document.createElement('div');
      modalCard.className = 'modal-card';

      var modalHeader = document.createElement('header');
      modalHeader.className = 'modal-card-head';
      var modalHeaderTitle = document.createElement('p');
      modalHeaderTitle.className = 'modal-card-title';
      modalHeaderTitle.innerHTML = 'iconPicker';
      this.modalHeaderSearch = document.createElement('input');
      this.modalHeaderSearch.setAttribute('type', 'search');
      this.modalHeaderSearch.setAttribute('placeholder', 'Search');
      this.modalHeaderSearch.className = 'iconpicker-search';
      this.modalHeaderSearch.addEventListener('input', function (e) {
        _this5.filter(e.target.value);
      });
      var modalHeaderClose = document.createElement('button');
      modalHeaderClose.className = 'delete';
      this._clickEvents.forEach(function (event) {
        modalHeaderClose.addEventListener(event, function (e) {
          e.preventDefault();

          _this5.modal.classList.remove('is-active');
        });
      });

      modalCard.appendChild(modalHeader);

      this.modalBody = document.createElement('section');
      this.modalBody.className = 'modal-card-body';

      if (this.options.iconSets.length >= 1) {
        var modalSets = document.createElement('div');
        modalSets.className = 'iconpicker-sets';
        modalSets.classList.add('tabs');
        this.modalSetTabs = document.createElement('ul');
        this.options.iconSets.forEach(function (iconSet) {
          var modalSetTab = document.createElement('li');
          var modalSetTabLink = document.createElement('a');
          modalSetTabLink.dataset.iconset = iconSet.name;
          modalSetTabLink.innerHTML = iconSet.name;
          _this5._clickEvents.forEach(function (event) {
            modalSetTabLink.addEventListener(event, function (e) {
              e.preventDefault();

              var activeModalTabs = _this5.modalSetTabs.querySelectorAll('.is-active');
              [].forEach.call(activeModalTabs, function (activeModalTab) {
                activeModalTab.classList.remove('is-active');
              });

              e.target.parentNode.classList.add('is-active');
              _this5.drawIcons(_this5.icons[e.target.dataset.iconset]);
              _this5.filter(_this5.modalHeaderSearch.value);
            });
          });
          modalSetTab.appendChild(modalSetTabLink);
          _this5.modalSetTabs.appendChild(modalSetTab);
        });
        modalSets.appendChild(this.modalSetTabs);
        modalCard.appendChild(modalSets);
      }

      this.iconsList = document.createElement('div');
      this.iconsList.className = 'iconpicker-icons';

      modalHeader.appendChild(modalHeaderTitle);
      modalHeader.appendChild(this.modalHeaderSearch);
      modalHeader.appendChild(modalHeaderClose);

      this.modalBody.appendChild(this.iconsList);
      modalCard.appendChild(this.modalBody);

      this.modal.appendChild(modalBackground);
      this.modal.appendChild(modalCard);
      document.body.appendChild(this.modal);
    }
  }, {
    key: 'filter',
    value: function filter() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (value === '') {
        this.iconsList.querySelectorAll('[data-filter]').forEach(function (el) {
          el.classList.remove('is-hidden');
        });
        return;
      }
      this.iconsList.querySelectorAll('[data-filter]').forEach(function (el) {
        el.classList.remove('is-hidden');
      });
      this.iconsList.querySelectorAll('[data-filter]:not([data-filter*="' + value + '"])').forEach(function (el) {
        el.classList.add('is-hidden');
      });
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-action="iconPicker"]';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaIconpicker(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaIconpicker;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (bulmaIconpicker);

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
  iconSets: [{
    name: 'simpleLine', // Name displayed on tab
    css: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css', // CSS url containing icons rules
    prefix: 'icon-', // CSS rules prefix to identify icons
    displayPrefix: ''
  }, {
    name: 'fontAwesome', // Name displayed on tab
    css: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', // CSS url containing icons rules
    prefix: 'fa-', // CSS rules prefix to identify icons
    displayPrefix: 'fas fa-icon'
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ })
/******/ ])["default"];
});