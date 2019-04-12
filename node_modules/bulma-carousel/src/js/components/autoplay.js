import EventEmitter from '../utils/eventEmitter';
import {pointerEnter, pointerLeave} from '../utils/device';

const onVisibilityChange = Symbol('onVisibilityChange');
const onMouseEnter = Symbol('onMouseEnter');
const onMouseLeave = Symbol('onMouseLeave');

const defaultOptions = {
	autoplay: false,
	autoplaySpeed: 3000
};

export default class Autoplay extends EventEmitter {
	constructor(slider) {
		super();

		this.slider = slider;

		this.onVisibilityChange = this.onVisibilityChange.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	init() {
		this._bindEvents();
		return this;
	}

	_bindEvents() {
		document.addEventListener('visibilitychange', this.onVisibilityChange);
		if (this.slider.options.pauseOnHover) {
			this.slider.container.addEventListener(pointerEnter, this.onMouseEnter);
			this.slider.container.addEventListener(pointerLeave, this.onMouseLeave);
		}
	}

	_unbindEvents() {
		document.removeEventListener('visibilitychange', this.onVisibilityChange);
		this.slider.container.removeEventListener(pointerEnter, this.onMouseEnter);
		this.slider.container.removeEventListener(pointerLeave, this.onMouseLeave);
	}

	start() {
		this.stop();
		if (this.slider.options.autoplay) {
			this.emit('start', this);
			this._interval = setInterval(() => {
				if (!(this._hovering && this.slider.options.pauseOnHover)) {
					if (!this.slider.options.centerMode && this.slider.state.next >= this.slider.state.length - this.slider.slidesToShow && !this.slider.options.loop && !this.slider.options.infinite) {
						this.stop();
					} else {
						this.slider.next();
					}
				}
			}, this.slider.options.autoplaySpeed);
		}
	}

	stop() {
		this._interval = clearInterval(this._interval);
		this.emit('stop', this);
	}

	pause(speed = 0) {
		if (this.paused) {
			return;
		}
		if (this.timer) {
			this.stop();
		}
		this.paused = true;
		if (speed === 0) {
			this.paused = false;
			this.start();
		} else {
			this.slider.on('transition:end', () => {
				if (!this) {
					return;
				}
				this.paused = false;
				if (!this.run) {
					this.stop();
				} else {
					this.start();
				}
			});
		}
	}

	onVisibilityChange(e) {
		if (document.hidden) {
			this.stop();
		} else {
			this.start();
		}
	}

	onMouseEnter(e) {
		this._hovering = true;
		if (this.slider.options.pauseOnHover) {
			this.pause();
		}
	}

	onMouseLeave(e) {
		this._hovering = false;
		if (this.slider.options.pauseOnHover) {
			this.pause();
		}
	}
}