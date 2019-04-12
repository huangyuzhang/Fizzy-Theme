import EventEmitter from './events';
import defaultOptions from './defaultOptions';

const onSliderInput = Symbol('onSliderInput');

export default class bulmaSlider extends EventEmitter {
  constructor(selector, options = {}) {
    super();

    this.element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    this.options = {
      ...defaultOptions,
      ...options
    };

    this[onSliderInput] = this[onSliderInput].bind(this);

    this.init();
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */
  static attach(selector = 'input[type="range"].slider', options = {}) {
    let instances = new Array();

    const elements = document.querySelectorAll(selector);
    [].forEach.call(elements, element => {
      setTimeout(() => {
        instances.push(new bulmaSlider(element, options));
      }, 100);
    });
    return instances;
  }

  /**
   * Initiate plugin
   * @method init
   * @return {void}
   */
  init() {
    this._id = 'bulmaSlider' + (new Date()).getTime() + Math.floor(Math.random() * Math.floor(9999));
    this.output = this._findOutputForSlider();

    if (this.output) {
      if (this.element.classList.contains('has-output-tooltip')) {
        // Get new output position
        var newPosition = this._getSliderOutputPosition();

        // Set output position
        this.output.style['left'] = newPosition.position;
      }
    }

    this.emit('bulmaslider:ready', this.element.value);
  }

  _findOutputForSlider() {
    const outputs = document.getElementsByTagName('output');
    [].forEach.call(outputs, output => {
      if (output.htmlFor == this.element.getAttribute('id')) {
        return output;
      }
    });
    return null;
  }

  _getSliderOutputPosition() {
    // Update output position
    var newPlace, minValue;
  
    var style = window.getComputedStyle(this.element, null);
    // Measure width of range input
    var sliderWidth = parseInt(style.getPropertyValue('width'), 10);
  
    // Figure out placement percentage between left and right of input
    if (!this.element.getAttribute('min')) {
      minValue = 0;
    } else {
      minValue = this.element.getAttribute('min');
    }
    var newPoint = (this.element.value - minValue) / (this.element.getAttribute('max') - minValue);
  
    // Prevent bubble from going beyond left or right (unsupported browsers)
    if (newPoint < 0) {
      newPlace = 0;
    } else if (newPoint > 1) {
      newPlace = sliderWidth;
    } else {
      newPlace = sliderWidth * newPoint;
    }
  
    return {
      'position': newPlace + 'px'
    }
  }
  
  /**
   * Bind all events
   * @method _bindEvents
   * @return {void}
   */
  _bindEvents() {
    if (this.output) {
      // Add event listener to update output when slider value change
      this.element.addEventListener('input', this[onSliderInput], false);
    }
  }

  [onSliderInput](e) {
    e.preventDefault();

    if (this.element.classList.contains('has-output-tooltip')) {
      // Get new output position
      var newPosition = this._getSliderOutputPosition();

      // Set output position
      this.output.style['left'] = newPosition.position;
    }

    // Check for prefix and postfix
    const prefix = (this.output.hasAttribute('data-prefix') ? this.output.getAttribute('data-prefix') : '');
    const postfix = (this.output.hasAttribute('data-postfix') ? this.output.getAttribute('data-postfix') : '');
    
    // Update output with slider value
    this.output.value = prefix + this.element.value + postfix;

    this.emit('bulmaslider:ready', this.element.value);
  }
}
