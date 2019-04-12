import {
	isInViewport
} from "../utils/dom";

export default class Loop {
	constructor(slider) {
		this.slider = slider;
	}

	init() {
		return this;
	}

	apply() {
		if (this.slider.options.loop) {
			if (this.slider.state.next > 0) {
				if (this.slider.state.next < this.slider.state.length) {
					if (this.slider.state.next > this.slider.state.length - this.slider.slidesToShow && isInViewport(this.slider._slides[this.slider.state.length - 1], this.slider.wrapper)) {
						this.slider.state.next = 0;
					} else {
						this.slider.state.next = Math.min(Math.max(this.slider.state.next, 0), this.slider.state.length - this.slider.slidesToShow);
					}
				} else {
					this.slider.state.next = 0;
				}
			} else {
				if (this.slider.state.next <= 0 - (this.slider.slidesToScroll)) {
					this.slider.state.next = this.slider.state.length - this.slider.slidesToShow;
				} else {
					this.slider.state.next = 0;
				}
			}
		}
	}
}