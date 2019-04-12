import EventEmitter from './events';

const onBulmaAccordionClick = Symbol('onBulmaAccordionClick');

export default class bulmaAccordion extends EventEmitter {
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

    this[onBulmaAccordionClick] = this[onBulmaAccordionClick].bind(this);

    this.init();
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */
  static attach(selector = '.accordions') {
    let instances = new Array();

    const elements = document.querySelectorAll(selector);
    [].forEach.call(elements, element => {
      setTimeout(() => {
        instances.push(new bulmaAccordion(element));
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
    this.items = this.element.querySelectorAll('.accordion .toggle') || [];

    this._bindEvents();
  }

  destroy() {
    this.items.forEach(item => {
      this._clickEvents.forEach(clickEvent => {
        item.removeEventListener(clickEvent, this[onBulmaAccordionClick], false);
      });
    });
  }

  /**
   * Bind all events
   * @method _bindEvents
   * @return {void}
   */
  _bindEvents() {
    this.items.forEach(item => {
      this._clickEvents.forEach(clickEvent => {
        item.addEventListener(clickEvent, this[onBulmaAccordionClick], false);
      });
    });
  }

  /**
   * Toggle accordion item
   * @method onBulmaAccordionClick
   * @param  {Event}    e click event
   * @return {void}
   */
  [onBulmaAccordionClick](e) {
    e.preventDefault();

    const target = e.currentTarget.closest('.accordion') || e.currentTarget;
    if (!target.classList.contains('is-active')) {
      let activeItem = this.element.querySelector('.accordion.is-active');
      if (activeItem) {
        activeItem.classList.remove('is-active');
      }
      target.classList.add('is-active');
    } else {
      target.classList.remove('is-active');
    }
  }
}
