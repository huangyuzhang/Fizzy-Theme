const onResize = Symbol('onResize');

export default class Breakpoints {
	constructor(slider) {
		this.slider = slider;
		this.options = slider.options;

		this[onResize] = this[onResize].bind(this);

		this._bindEvents();
	}

	init() {
		this._defaultBreakpoint = {
			slidesToShow: this.options.slidesToShow,
			slidesToScroll: this.options.slidesToScroll
		};
		this.options.breakpoints.sort(function (a, b) {
			return parseInt(a.changePoint, 10) > parseInt(b.changePoint, 10);
		});
		this._currentBreakpoint = this._getActiveBreakpoint();

		return this;
	}

	destroy() {
		this._unbindEvents();
	}

	_bindEvents() {
		window.addEventListener('resize', this[onResize]);
		window.addEventListener('orientationchange', this[onResize]);
	}

	_unbindEvents() {
		window.removeEventListener('resize', this[onResize]);
		window.removeEventListener('orientationchange', this[onResize]);
	}

	_getActiveBreakpoint() {
		//Get breakpoint for window width
		for (let point of this.options.breakpoints) {
			if (point.changePoint >= window.innerWidth) {
				return point;
			}
		}
		return this._defaultBreakpoint;
	}

	getSlidesToShow() {
		return this._currentBreakpoint ? this._currentBreakpoint.slidesToShow : this._defaultBreakpoint.slidesToShow;
	}

	getSlidesToScroll() {
		return this._currentBreakpoint ? this._currentBreakpoint.slidesToScroll : this._defaultBreakpoint.slidesToScroll;
	}

	apply() {
		if (this.slider.state.index >= this.slider.state.length && this.slider.state.index !== 0) {
			this.slider.state.index = this.slider.state.index - this._currentBreakpoint.slidesToScroll;
		}
		if (this.slider.state.length <= this._currentBreakpoint.slidesToShow) {
			this.slider.state.index = 0;
		}

		if (this.options.loop) {
			this.slider._loop.init().apply();
		}

		if (this.options.infinite) {
			this.slider._infinite.init().apply();
		}

		this.slider._setDimensions();
		this.slider._transitioner.init().apply(true, this.slider._setHeight.bind(this.slider));
		this.slider._setClasses();

		this.slider._navigation.refresh();
		this.slider._pagination.refresh();
	}

	[onResize](e) {
		let newBreakPoint = this._getActiveBreakpoint();
		if (newBreakPoint.slidesToShow !== this._currentBreakpoint.slidesToShow) {
			this._currentBreakpoint = newBreakPoint;
			this.apply();
		}
	}
}