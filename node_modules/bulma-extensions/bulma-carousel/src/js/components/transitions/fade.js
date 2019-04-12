import {
	css
} from '../../utils/css';

export default class Fade {
	constructor(transitioner, slider, options = {}) {
		this.transitioner = transitioner;
		this.slider = slider;
		this.options = {
			...options
		};
	}

	init() {
		if (this.options.effect === 'fade') {
			this.slider.slides.forEach((slide, index) => {
				css(slide, {
					position: 'absolute',
					left: 0,
					top: 0,
					bottom: 0,
					'z-index': slide.dataset.sliderIndex == this.slider.state.index ? 0 : -2,
					opacity: slide.dataset.sliderIndex == this.slider.state.index ? 1 : 0
				});
			});
		}
		return this;
	}

	enable() {
		this._oldSlide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.index)[0];
		this._newSlide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.next)[0];
		if (this._newSlide) {
			this._newSlide.addEventListener('transitionend', this.onTransitionEnd.bind(this));
			this._newSlide.style.transition = `${this.options.duration}ms ${this.options.timing}`;
			if (this._oldSlide) {
				this._oldSlide.addEventListener('transitionend', this.onTransitionEnd.bind(this));
				this._oldSlide.style.transition = `${this.options.duration}ms ${this.options.timing}`;
			}
		}
	}

	disable() {
		this._oldSlide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.index)[0];
		this._newSlide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.next)[0];
		if (this._newSlide) {
			this._newSlide.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
			this._newSlide.style.transition = `none`;
			if (this._oldSlide) {
				this._oldSlide.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
				this._oldSlide.style.transition = `none`;
			}
		}
	}

	apply(force) {
		this._oldSlide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.index)[0];
		this._newSlide = this.slider.slides.filter(slide => slide.dataset.sliderIndex == this.slider.state.next)[0];
		
		if (this._oldSlide && this._newSlide) {
			css(this._oldSlide, {
				opacity: 0
			});
			css(this._newSlide, {
				opacity: 1,
				'z-index': force ? 0 : -1
			});
		}
	}

	onTransitionEnd(e) {
		if (this.options.effect === 'fade') {
			if (this.transitioner.isAnimating() && e.target == this._newSlide) {
				if (this._newSlide) {
					css(this._newSlide, {
						'z-index': 0
					});
					this._newSlide.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
				}
				if (this._oldSlide) {
					css(this._oldSlide, {
						'z-index': -2
					});
					this._oldSlide.removeEventListener('transitionend', this.onTransitionEnd.bind(this));
				}
			}
			this.transitioner.end();
		}
	}
}