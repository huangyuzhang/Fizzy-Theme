import template from '../templates/navigation';
import detectSupportsPassive from '../utils/detect-supportsPassive';

export default class Navigation {
	constructor(slider) {
		this.slider = slider;

		this._clickEvents = ['click', 'touch'];
		this._supportsPassive = detectSupportsPassive();

		this.onPreviousClick = this.onPreviousClick.bind(this);
		this.onNextClick = this.onNextClick.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
	}

	init() {
		this.node = document.createRange().createContextualFragment(template(this.slider.options.icons));
		this._ui = {
			previous: this.node.querySelector('.slider-navigation-previous'),
			next: this.node.querySelector('.slider-navigation-next')
		};

		this._unbindEvents();
		this._bindEvents();

		this.refresh();

		return this;
	}

	destroy() {
		this._unbindEvents();
	}

	_bindEvents() {
		this.slider.wrapper.addEventListener('keyup', this.onKeyUp);
		this._clickEvents.forEach(clickEvent => {
			this._ui.previous.addEventListener(clickEvent, this.onPreviousClick);
			this._ui.next.addEventListener(clickEvent, this.onNextClick);
		});
	}

	_unbindEvents() {
		this.slider.wrapper.removeEventListener('keyup', this.onKeyUp);
		this._clickEvents.forEach(clickEvent => {
			this._ui.previous.removeEventListener(clickEvent, this.onPreviousClick);
			this._ui.next.removeEventListener(clickEvent, this.onNextClick);
		});
	}

	onNextClick(e) {
		if (!this._supportsPassive) {
			e.preventDefault();
		}

		if (this.slider.options.navigation) {
			this.slider.next();
		}
	}

	onPreviousClick(e) {
		if (!this._supportsPassive) {
			e.preventDefault();
		}

		if (this.slider.options.navigation) {
			this.slider.previous();
		}
	}

	onKeyUp(e) {
		if (this.slider.options.keyNavigation) {
			if (e.key === 'ArrowRight' || e.key === 'Right') {
				this.slider.next();
			} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
				this.slider.previous();
			}
		}
	}

	refresh() {
		// let centerOffset = Math.floor(this.options.slidesToShow / 2);
		if (!this.slider.options.loop && !this.slider.options.infinite) {
			if (this.slider.options.navigation && this.slider.state.length > this.slider.slidesToShow) {
				this._ui.previous.classList.remove('is-hidden');
				this._ui.next.classList.remove('is-hidden');
				if (this.slider.state.next === 0) {
					this._ui.previous.classList.add('is-hidden');
					this._ui.next.classList.remove('is-hidden');
				} else if (this.slider.state.next >= this.slider.state.length - this.slider.slidesToShow && !this.slider.options.centerMode) {
					this._ui.previous.classList.remove('is-hidden');
					this._ui.next.classList.add('is-hidden');
				} else if (this.slider.state.next >= this.slider.state.length - 1 && this.slider.options.centerMode) {
					this._ui.previous.classList.remove('is-hidden');
					this._ui.next.classList.add('is-hidden');
				}
			} else {
				this._ui.previous.classList.add('is-hidden');
				this._ui.next.classList.add('is-hidden');
			}
		}
	}

	render() {
		return this.node;
	}
}