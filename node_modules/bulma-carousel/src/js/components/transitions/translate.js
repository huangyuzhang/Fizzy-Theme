import Coordinate from '../../utils/coordinate';
import {
	height,
	width
} from '../../utils/css';

export default class Translate {
	constructor(transitioner, slider, options = {}) {
		this.transitioner = transitioner;
		this.slider = slider;
		this.options = {
			...options
		};

		this.onTransitionEnd = this.onTransitionEnd.bind(this);
	}

	init() {
		this._position = new Coordinate(this.slider.container.offsetLeft, this.slider.container.offsetTop);
		this._bindEvents();
		return this;
	}

	destroy() {
		this._unbindEvents();
	}

	_bindEvents() {
		this.slider.container.addEventListener('transitionend', this.onTransitionEnd);
	}

	_unbindEvents() {
		this.slider.container.removeEventListener('transitionend', this.onTransitionEnd);
	}

	enable() {
		this.slider.container.style.transition = `${this.options.duration}ms ${this.options.timing}`;
	}

	disable() {
		this.slider.container.style.transition = 'none';
	}

	apply() {
		let maxOffset;
		if (this.options.effect === 'translate') {
			const slide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.next)[0];
			const slideOffset = new Coordinate(slide.offsetLeft, slide.offsetTop);
			if (this.options.centerMode) {
				maxOffset = new Coordinate(Math.round(width(this.slider.container)), Math.round(height(this.slider.container)));
			} else {
				maxOffset = new Coordinate(Math.round(width(this.slider.container) - width(this.slider.wrapper)), Math.round(height(this.slider.container) - height(this.slider.wrapper)));
			}
			const nextOffset = new Coordinate(Math.min(Math.max(slideOffset.x * -1, maxOffset.x * -1), 0), Math.min(Math.max(slideOffset.y * -1, maxOffset.y * -1), 0));
			if (this.options.loop) {
				if (!this.options.vertical && Math.abs(this._position.x) > maxOffset.x) {
					nextOffset.x = 0;
					this.slider.state.next = 0;
				} else if (this.options.vertical && Math.abs(this._position.y) > maxOffset.y) {
					nextOffset.y = 0;
					this.slider.state.next = 0;
				}
			}

			this._position.x = nextOffset.x;
			this._position.y = nextOffset.y;
			if (this.options.centerMode) {
				this._position.x = this._position.x + (this.slider.wrapperWidth / 2) - (width(slide) / 2);
			}

			if (this.slider.direction === 'rtl') {
				this._position.x = -this._position.x;
				this._position.y = -this._position.y;
			}
			this.slider.container.style.transform = `translate3d(${this._position.x}px, ${this._position.y}px, 0)`;

			/**
			 * update the index with the nextIndex only if
			 * the offset of the nextIndex is in the range of the maxOffset
			 */
			if (slideOffset.x > maxOffset.x) {
				this.slider.transitioner.end();
			}
		}
	}

	onTransitionEnd(e) {
		if (this.options.effect === 'translate') {

			if (this.transitioner.isAnimating() && e.target == this.slider.container) {
				if (this.options.infinite) {
					this.slider._infinite.onTransitionEnd(e);
				}
			}
			this.transitioner.end();
		}
	}
}