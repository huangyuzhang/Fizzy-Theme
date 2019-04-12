import {
  uuid
} from './utils/index';
import {
  removeClasses,
  height,
  width,
  outerHeight
} from './utils/css';
import {
  isString,
  isFunction
} from './utils/type';
import EventEmitter from './utils/eventEmitter';

import Autoplay from './components/autoplay';
import Breakpoint from './components/breakpoint';
import Infinite from './components/infinite';
import Loop from './components/loop';
import Navigation from './components/navigation';
import Pagination from './components/pagination';
import Swipe from './components/swipe';
import Transitioner from './components/transitioner';

import defaultOptions from './defaultOptions';
import template from './templates';
import templateItem from './templates/item';

export default class bulmaCarousel extends EventEmitter {
  constructor(selector, options = {}) {
    super();

    this.element = isString(selector) ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }
    this._clickEvents = ['click', 'touch'];

    // Use Element dataset values to override options
    const elementConfig = this.element.dataset ? Object.keys(this.element.dataset)
      .filter(key => Object.keys(defaultOptions).includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: this.element.dataset[key]
        };
      }, {}) : {};
    // Set default options - dataset attributes are master
    this.options = {
      ...defaultOptions,
      ...options,
      ...elementConfig
    };

    this._id = uuid('slider');

    this.onShow = this.onShow.bind(this);

    // Initiate plugin
    this._init();
  }

  /**
   * Initiate all DOM element containing datePicker class
   * @method
   * @return {Array} Array of all datePicker instances
   */
  static attach(selector = '.slider', options = {}) {
    let instances = new Array();

    const elements = isString(selector) ? document.querySelectorAll(selector) : Array.isArray(selector) ? selector : [selector];
    [].forEach.call(elements, element => {
      if (typeof element[this.constructor.name] === 'undefined') {
        const instance = new bulmaCarousel(element, options);
        element[this.constructor.name] = instance;
        instances.push(instance);
      } else {
        instances.push(element[this.constructor.name]);
      }
    });

    return instances;
  }

  /****************************************************
   *                                                  *
   * PRIVATE FUNCTIONS                                *
   *                                                  *
   ****************************************************/
  /**
   * Initiate plugin instance
   * @method _init
   * @return {Slider} Current plugin instance
   */
  _init() {
    this._items = Array.from(this.element.children);

    // Load plugins
    this._breakpoint = new Breakpoint(this);
    this._autoplay = new Autoplay(this);
    this._navigation = new Navigation(this);
    this._pagination = new Pagination(this);
    this._infinite = new Infinite(this);
    this._loop = new Loop(this);
    this._swipe = new Swipe(this);

    this._build();

    if (isFunction(this.options.onReady)) {
      this.options.onReady(this);
    }

    return this;
  }

  /**
   * Build Slider HTML component and append it to the DOM
   * @method _build
   */
  _build() {
    // Generate HTML Fragment of template
    this.node = document.createRange().createContextualFragment(template(this.id));
    // Save pointers to template parts
    this._ui = {
      wrapper: this.node.firstChild,
      container: this.node.querySelector('.slider-container')
    }

    // Add slider to DOM
    this.element.appendChild(this.node);
    this._ui.wrapper.classList.add('is-loading');
    this._ui.container.style.opacity = 0;

    this._transitioner = new Transitioner(this);

    // Wrap all items by slide element
    this._slides = this._items.map((item, index) => {
      return this._createSlide(item, index);
    });

    this.reset();

    this._bindEvents();

    this._ui.container.style.opacity = 1;
    this._ui.wrapper.classList.remove('is-loading');
  }

  /**
   * Bind all events
   * @method _bindEvents
   * @return {void}
   */
  _bindEvents() {
    this.on('show', this.onShow);
  }

  _unbindEvents() {
    this.off('show', this.onShow);
  }

  _createSlide(item, index) {
    const slide = document.createRange().createContextualFragment(templateItem()).firstChild;
    slide.dataset.sliderIndex = index;
    slide.appendChild(item);
    return slide;
  }

  /**
   * Calculate slider dimensions
   */
  _setDimensions() {
    if (!this.options.vertical) {
      if (this.options.centerMode) {
        this._ui.wrapper.style.padding = '0px ' + this.options.centerPadding;
      }
    } else {
      this._ui.wrapper.style.height = outerHeight(this._slides[0]) * this.slidesToShow;
      if (this.options.centerMode) {
        this._ui.wrapper.style.padding = this.options.centerPadding + ' 0px';
      }
    }

    this._wrapperWidth = width(this._ui.wrapper);
    this._wrapperHeight = outerHeight(this._ui.wrapper);

    if (!this.options.vertical) {
      this._slideWidth = Math.ceil(this._wrapperWidth / this.slidesToShow);
      this._containerWidth = Math.ceil(this._slideWidth * this._slides.length);
      this._ui.container.style.width = this._containerWidth + 'px';
    } else {
      this._slideWidth = Math.ceil(this._wrapperWidth);
      this._containerHeight = Math.ceil((outerHeight(this._slides[0]) * this._slides.length));
      this._ui.container.style.height = this._containerHeight + 'px';
    }

    this._slides.forEach(slide => {
      slide.style.width = this._slideWidth + 'px';
    });
  }

  _setHeight() {
    if (this.options.effect !== 'translate') {
      this._ui.container.style.height = outerHeight(this._slides[this.state.index]) + 'px';
    }
  }

  // Update slides classes
  _setClasses() {
    this._slides.forEach(slide => {
      removeClasses(slide, 'is-active is-current is-slide-previous is-slide-next');
      if (Math.abs((this.state.index - 1) % this.state.length) === parseInt(slide.dataset.sliderIndex, 10)) {
        slide.classList.add('is-slide-previous');
      }
      if (Math.abs(this.state.index % this.state.length) === parseInt(slide.dataset.sliderIndex, 10)) {
        slide.classList.add('is-current');
      }
      if (Math.abs((this.state.index + 1) % this.state.length) === parseInt(slide.dataset.sliderIndex, 10)) {
        slide.classList.add('is-slide-next');
      }
    });
  }

  /****************************************************
   *                                                  *
   * GETTERS and SETTERS                              *
   *                                                  *
   ****************************************************/

  /**
   * Get id of current datePicker
   */
  get id() {
    return this._id;
  }

  set index(index) {
    this._index = index;
  }

  get index() {
    return this._index;
  }

  set length(length) {
    this._length = length;
  }

  get length() {
    return this._length;
  }

  get slides() {
    return this._slides;
  }

  set slides(slides) {
    this._slides = slides;
  }

  get slidesToScroll() {
    return this.options.effect === 'translate' ? this._breakpoint.getSlidesToScroll() : 1;
  }

  get slidesToShow() {
    return this.options.effect === 'translate' ? this._breakpoint.getSlidesToShow() : 1;
  }

  get direction() {
    return (this.element.dir.toLowerCase() === 'rtl' || this.element.style.direction === 'rtl') ? 'rtl' : 'ltr';
  }

  get wrapper() {
    return this._ui.wrapper;
  }

  get wrapperWidth() {
    return this._wrapperWidth || 0;
  }

  get container() {
    return this._ui.container;
  }

  get containerWidth() {
    return this._containerWidth || 0;
  }

  get slideWidth() {
    return this._slideWidth || 0;
  }

  get transitioner() {
    return this._transitioner;
  }

  
  /****************************************************
   *                                                  *
   * EVENTS FUNCTIONS                                 *
   *                                                  *
   ****************************************************/
  onShow(e) {
    this._navigation.refresh();
    this._pagination.refresh();
    this._setClasses();
  }

  /****************************************************
   *                                                  *
   * PUBLIC FUNCTIONS                                 *
   *                                                  *
   ****************************************************/
  next() {
    if (!this.options.loop && !this.options.infinite && this.state.index + this.slidesToScroll > this.state.length - this.slidesToShow && !this.options.centerMode) {
      this.state.next = this.state.index;
    } else {
      this.state.next = this.state.index + this.slidesToScroll;
    }
    this.show();
  }

  previous() {
    if (!this.options.loop && !this.options.infinite && this.state.index === 0) {
      this.state.next = this.state.index;
    } else {
      this.state.next = this.state.index - this.slidesToScroll;
    }
    this.show();
  }

  start() {
    this._autoplay.start();
  }

  pause() {
    this._autoplay.pause();
  }

  stop() {
    this._autoplay.stop();
  }

  show(index, force = false) {
    // If all slides are already visible then return
    if (!this.state.length || this.state.length <= this.slidesToShow) {
      return;
    }

    if (typeof index === 'Number') {
      this.state.next = index;
    }

    if (this.options.loop) {
      this._loop.apply();
    }
    if (this.options.infinite) {
      this._infinite.apply();
    }

    // If new slide is already the current one then return
    if (this.state.index === this.state.next) {
      return;
    }

    this.emit('before:show', this.state);
    this._transitioner.apply(force, this._setHeight.bind(this));
    this.emit('after:show', this.state);

    this.emit('show', this);
  }

  reset() {
    this.state = {
      length: this._items.length,
      index: Math.abs(this.options.initialSlide),
      next: Math.abs(this.options.initialSlide),
      prev: undefined
    };

    // Fix options
    if (this.options.loop && this.options.infinite) {
      this.options.loop = false;
    }
    if (this.options.slidesToScroll > this.options.slidesToShow) {
      this.options.slidesToScroll = this.slidesToShow;
    }
    this._breakpoint.init();

    if (this.state.index >= this.state.length && this.state.index !== 0) {
      this.state.index = this.state.index - this.slidesToScroll;
    }
    if (this.state.length <= this.slidesToShow) {
      this.state.index = 0;
    }

    this._ui.wrapper.appendChild(this._navigation.init().render());
    this._ui.wrapper.appendChild(this._pagination.init().render());

    if (this.options.navigationSwipe) {
      this._swipe.bindEvents();
    } else {
      this._swipe._bindEvents();
    }

    this._breakpoint.apply();
    // Move all created slides into slider
    this._slides.forEach(slide => this._ui.container.appendChild(slide));
    this._transitioner.init().apply(true, this._setHeight.bind(this));

    if (this.options.autoplay) {
      this._autoplay.init().start();
    }
  }

  /**
   * Destroy Slider
   * @method destroy
   */
  destroy() {
    this._unbindEvents();
    this._items.forEach(item => {
      this.element.appendChild(item);
    });
    this.node.remove();
  }
}