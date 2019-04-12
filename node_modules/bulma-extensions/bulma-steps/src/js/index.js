import EventEmitter from './events';
import defaultOptions from './defaultOptions';

const onStepsPrevious = Symbol('onStepsPrevious');
const onStepsNext = Symbol('onStepsNext');

export default class bulmaSteps extends EventEmitter {
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

    this[onStepsPrevious] = this[onStepsPrevious].bind(this);
    this[onStepsNext] = this[onStepsNext].bind(this);

    this.init();
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */
  static attach(selector = '.steps', options = {}) {
    let instances = new Array();

    const elements = document.querySelectorAll(selector);
    [].forEach.call(elements, element => {
      setTimeout(() => {
        instances.push(new bulmaSteps(element, options));
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
    this._id = 'bulmaSteps' + (new Date()).getTime() + Math.floor(Math.random() * Math.floor(9999));

    this.steps = this.element.querySelectorAll(this.options.selector);
    this.contents = this.element.querySelectorAll(this.options.selector_content);
    this.previous_btn = this.element.querySelector(this.options.previous_selector);
    this.next_btn = this.element.querySelector(this.options.next_selector);

    [].forEach.call(this.steps, (step, index) => {
      step.setAttribute('data-step-id', index);
    });

    if (this.steps && this.steps.length) {
      this.activate_step(0);
      this.updateActions(this.steps[0]);
    }

    this._bindEvents();

    this.emit('bulmasteps:ready', this.element.value);
  }

  /**
   * Bind all events
   * @method _bindEvents
   * @return {void}
   */
  _bindEvents() {
    if (this.previous_btn != null) {
      this._clickEvents.forEach(event => {
        this.previous_btn.addEventListener(event, this[onStepsPrevious], false);
      });
    }

    if (this.next_btn != null) {
      this._clickEvents.forEach(event => {
        this.next_btn.addEventListener(event, this[onStepsNext], false);
      });
    }

    if (this.options.stepClickable) {
      [].forEach.call(this.steps, (step, index) => {
        this._clickEvents.forEach(event => {
          while(index > this.current_id) {
            this[onStepsNext](event);
          }
          while(index < this.current_id) {
            this[onStepsPrevious](event);
          }
        });
      })
    }
  }

  [onStepsPrevious](e) {
    e.preventDefault();

    if (!e.target.getAttribute('disabled')) {
      this.previous_step();
    }
  }

  [onStepsNext](e) {
    e.preventDefault();

    if (!e.target.getAttribute('disabled')) {
      this.next_step();
    }
  }

  get_current_step_id() {
    for (var i = 0; i < this.steps.length; i++) {
      var step = this.steps[i];

      if (step.classList.contains(this.options.active_class)) {
        return parseInt(step.getAttribute('data-step-id'));
      }
    }

    return null;
  }

  updateActions(step) {
    var stepId = parseInt(step.getAttribute('data-step-id'));
    if (stepId == 0) {
      if (this.previous_btn != null) {
        this.previous_btn.setAttribute('disabled', 'disabled');
      }
      if (this.next_btn != null) {
        this.next_btn.removeAttribute('disabled', 'disabled');
      }
    } else if (stepId == (this.steps.length - 1)) {
      if (this.previous_btn != null) {
        this.previous_btn.removeAttribute('disabled', 'disabled');
      }
      if (this.next_btn != null) {
        this.next_btn.setAttribute('disabled', 'disabled');
      }
    } else {
      if (this.previous_btn != null) {
        this.previous_btn.removeAttribute('disabled', 'disabled');
      }
      if (this.next_btn != null) {
        this.next_btn.removeAttribute('disabled', 'disabled');
      }
    }
  }

  next_step() {
    var current_id = this.get_current_step_id();

    if (current_id == null) {
      return;
    }

    var next_id = current_id + 1,
      errors = [];

    if (typeof this.options.beforeNext != 'undefined' && this.options.beforeNext != null && this.options.beforeNext) {
      errors = this.options.beforeNext(current_id);
    }
    this.emit('bulmasteps:before:next', current_id);

    if (typeof errors == 'undefined') {
      errors = [];
    }

    if (errors.length > 0) {
      this.emit('bulmasteps:errors', errors);
      for (var i = 0; i < errors.length; i++) {
        if (typeof this.options.onError != 'undefined' && this.options.onError != null && this.options.onError) {
          this.options.onError(errors[i]);
        }
      }

      return;
    }

    if (next_id >= this.steps.length - 1) {
      if (typeof this.options.onFinish != 'undefined' && this.options.onFinish != null && this.options.onFinish) {
        this.options.onFinish(current_id);
      }
      this.emit('bulmasteps:finish', current_id);
    }
    if (next_id < this.steps.length) {
      this.complete_step(current_id);
      this.activate_step(next_id);
    }
  }

  previous_step() {
    var current_id = this.get_current_step_id();
    if (current_id == null) {
      return;
    }

    this.uncomplete_step(current_id - 1);
    this.activate_step(current_id - 1);
  }

  /**
   * Activate a single step,
   * will deactivate all other steps.
   */
  activate_step(step_id) {
    this.updateActions(this.steps[step_id]);

    for (var i = 0; i < this.steps.length; i++) {
      var _step = this.steps[i];

      if (_step == this.steps[step_id]) {
        continue;
      }

      this.deactivate_step(i);
    }

    this.steps[step_id].classList.add(this.options.active_class);
    if (typeof this.contents[step_id] !== 'undefined') {
      this.contents[step_id].classList.add(this.options.active_class);
    }

    if (typeof this.options.onShow != 'undefined' && this.options.onShow != null && this.options.onShow) {
      this.options.onShow(step_id);
    }

    this.emit('bulmasteps:step:show', step_id);
  }

  complete_step(step_id) {
    this.steps[step_id].classList.add(this.options.completed_class);
    this.emit('bulmasteps:step:completed', step_id);
  }

  uncomplete_step(step_id) {
    this.steps[step_id].classList.remove(this.options.completed_class);
    this.emit('bulmasteps:step:uncompleted', step_id);
  }

  deactivate_step(step_id) {
    this.steps[step_id].classList.remove(this.options.active_class);
    if (typeof this.contents[step_id] !== 'undefined') {
      this.contents[step_id].classList.remove(this.options.active_class);
    }
  }
}
