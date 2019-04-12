import Coordinate from '../utils/coordinate';
import detectSupportsPassive from '../utils/detect-supportsPassive';

export default class Swipe {
	constructor(slider) {
		this.slider = slider;

		this._supportsPassive = detectSupportsPassive();

		this.onStartDrag = this.onStartDrag.bind(this);
		this.onMoveDrag = this.onMoveDrag.bind(this);
		this.onStopDrag = this.onStopDrag.bind(this);

		this._init();
	}

	_init() {}

	bindEvents() {
		this.slider.container.addEventListener('dragstart', e => {
			if (!this._supportsPassive) {
				e.preventDefault();
			}
		});
		this.slider.container.addEventListener('mousedown', this.onStartDrag);
		this.slider.container.addEventListener('touchstart', this.onStartDrag);

		window.addEventListener('mousemove', this.onMoveDrag);
		window.addEventListener('touchmove', this.onMoveDrag);

		window.addEventListener('mouseup', this.onStopDrag);
		window.addEventListener('touchend', this.onStopDrag);
		window.addEventListener('touchcancel', this.onStopDrag);
	}

	unbindEvents() {
		this.slider.container.removeEventListener('dragstart', e => {
			if (!this._supportsPassive) {
				e.preventDefault();
			}
		});
		this.slider.container.removeEventListener('mousedown', this.onStartDrag);
		this.slider.container.removeEventListener('touchstart', this.onStartDrag);

		window.removeEventListener('mousemove', this.onMoveDrag);
		window.removeEventListener('touchmove', this.onMoveDrag);

		window.removeEventListener('mouseup', this.onStopDrag);
		window.removeEventListener('mouseup', this.onStopDrag);
		window.removeEventListener('touchcancel', this.onStopDrag);
	}

	/**
	 * @param {MouseEvent|TouchEvent}
	 */
	onStartDrag(e) {
		if (e.touches) {
			if (e.touches.length > 1) {
				return;
			} else {
				e = e.touches[0];
			}
		}

		this._origin = new Coordinate(e.screenX, e.screenY);
		this.width = this.slider.wrapperWidth;
		this.slider.transitioner.disable();
	}

	/**
	 * @param {MouseEvent|TouchEvent}
	 */
	onMoveDrag(e) {
		if (this._origin) {
			let point = e.touches ? e.touches[0] : e;
			this._lastTranslate = new Coordinate(point.screenX - this._origin.x, point.screenY - this._origin.y);
			if (e.touches) {
				if (Math.abs(this._lastTranslate.x) > Math.abs(this._lastTranslate.y)) {
					if (!this._supportsPassive) {
						e.preventDefault();
					}
					e.stopPropagation();
				}
			}
		}
	}

	/**
	 * @param {MouseEvent|TouchEvent}
	 */
	onStopDrag(e) {
		if (this._origin && this._lastTranslate) {
			if (Math.abs(this._lastTranslate.x) > 0.2 * this.width) {
				if (this._lastTranslate.x < 0) {
					this.slider.next();
				} else {
					this.slider.previous();
				}
			} else {
				this.slider.show(true);
			}
		}
		this._origin = null;
		this._lastTranslate = null;
	}
}