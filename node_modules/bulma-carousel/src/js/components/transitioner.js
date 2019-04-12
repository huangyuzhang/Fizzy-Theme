import Fade from './transitions/fade';
import Translate from './transitions/translate';

export default class Transitioner {
	constructor(slider) {
		this.slider = slider;
		this.options = slider.options;

		this._animating = false;
		this._animation = undefined;

		this._translate = new Translate(this, slider, slider.options);
		this._fade = new Fade(this, slider, slider.options);
	}

	init() {
		this._fade.init();
		this._translate.init();
		return this;
	}

	isAnimating() {
		return this._animating;
	}

	enable() {
		this._animation && this._animation.enable();
	}

	disable() {
		this._animation && this._animation.disable();
	}

	apply(force, callback) {
		// If we don't force refresh and animation in progress then return
		if (this._animating && !force) {
			return;
		}

		switch (this.options.effect) {
			case 'fade':
				this._animation = this._fade;
				break;
			case 'translate':
			default:
				this._animation = this._translate;
				break;
		}

		this._animationCallback = callback;

		if (force) {
			this._animation && this._animation.disable();
		} else {
			this._animation && this._animation.enable();
			this._animating = true;
		}

		this._animation && this._animation.apply();

		if (force) {
			this.end();
		}
	}

	end() {
		this._animating = false;
		this._animation = undefined;
		this.slider.state.index = this.slider.state.next;
		if (this._animationCallback) {
			this._animationCallback();
		}
	}
}