export default class Infinite {
	constructor(slider) {
		this.slider = slider;
	}

	init() {
		if (this.slider.options.infinite && this.slider.options.effect === 'translate') {
			if (this.slider.options.centerMode) {
				this._infiniteCount = Math.ceil(this.slider.slidesToShow + (this.slider.slidesToShow / 2));
			} else {
				this._infiniteCount = this.slider.slidesToShow;
			}

			let frontClones = [];
			let slideIndex = 0;
			for (let i = this.slider.state.length; i > (this.slider.state.length - 1 - this._infiniteCount); i -= 1) {
				slideIndex = i - 1;
				frontClones.unshift(this._cloneSlide(this.slider.slides[slideIndex], slideIndex - this.slider.state.length));
			}

			let backClones = [];
			for (let i = 0; i < this._infiniteCount + this.slider.state.length; i += 1) {
				backClones.push(this._cloneSlide(this.slider.slides[i % this.slider.state.length], i + this.slider.state.length));
			}

			this.slider.slides = [
				...frontClones,
				...this.slider.slides,
				...backClones
			];
		}
		return this;
	}

	apply() {
	}

	onTransitionEnd(e) {
		if (this.slider.options.infinite) {
			if (this.slider.state.next >= this.slider.state.length) {
				this.slider.state.index = this.slider.state.next = this.slider.state.next - this.slider.state.length;
				this.slider.transitioner.apply(true);
			} else if (this.slider.state.next < 0) {
				this.slider.state.index = this.slider.state.next = this.slider.state.length + this.slider.state.next;
				this.slider.transitioner.apply(true);
			}
		}
	}

	_cloneSlide(slide, index) {
		const newSlide = slide.cloneNode(true);
		newSlide.dataset.sliderIndex = index;
		newSlide.dataset.cloned = true;
		const ids = newSlide.querySelectorAll('[id]') || [];
		ids.forEach(id => {
			id.setAttribute('id', '');
		});
		return newSlide;
	}
}