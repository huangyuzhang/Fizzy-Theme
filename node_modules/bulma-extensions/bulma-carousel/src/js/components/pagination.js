import template from '../templates/pagination';
import templatePage from '../templates/pagination-page';
import detectSupportsPassive from '../utils/detect-supportsPassive';

export default class Pagination {
	constructor(slider) {
		this.slider = slider;

		this._clickEvents = ['click', 'touch'];
		this._supportsPassive = detectSupportsPassive();

		this.onPageClick = this.onPageClick.bind(this);
		this.onResize = this.onResize.bind(this);
	}

	init() {
		this._pages = [];
		this.node = document.createRange().createContextualFragment(template());
		this._ui = {
			container: this.node.firstChild
		};

		this._count = Math.ceil((this.slider.state.length - this.slider.slidesToShow) / this.slider.slidesToScroll);

		this._draw();
		this.refresh();

		return this;
	}

	destroy() {
		this._unbindEvents();
	}

	_bindEvents() {
		window.addEventListener('resize', this.onResize);
		window.addEventListener('orientationchange', this.onResize);

		this._clickEvents.forEach(clickEvent => {
			this._pages.forEach(page => page.addEventListener(clickEvent, this.onPageClick));
		});
	}

	_unbindEvents() {
		window.removeEventListener('resize', this.onResize);
		window.removeEventListener('orientationchange', this.onResize);

		this._clickEvents.forEach(clickEvent => {
			this._pages.forEach(page => page.removeEventListener(clickEvent, this.onPageClick));
		});
	}

	_draw() {
		this._ui.container.innerHTML = '';
		if (this.slider.options.pagination && this.slider.state.length > this.slider.slidesToShow) {
			for (let i = 0; i <= this._count; i++) {
				const newPageNode = document.createRange().createContextualFragment(templatePage()).firstChild;
				newPageNode.dataset.index = i * this.slider.slidesToScroll;
				this._pages.push(newPageNode);
				this._ui.container.appendChild(newPageNode);
			}
			this._bindEvents();
		}
	}

	onPageClick(e) {
		if (!this._supportsPassive) {
			e.preventDefault();
		}

		this.slider.state.next = e.currentTarget.dataset.index;
		this.slider.show();
	}

	onResize() {
		this._draw();
	}

	refresh() {
		let newCount;

		if (this.slider.options.infinite) {
			newCount = Math.ceil(this.slider.state.length - 1 / this.slider.slidesToScroll);
		} else {
			newCount = Math.ceil((this.slider.state.length - this.slider.slidesToShow) / this.slider.slidesToScroll);
		}
		if (newCount !== this._count) {
			this._count = newCount;
			this._draw();
		}

		this._pages.forEach(page => {
			page.classList.remove('is-active');
			if (parseInt(page.dataset.index, 10) === this.slider.state.next % this.slider.state.length) {
				page.classList.add('is-active');
			}
		});
	}

	render() {
		return this.node;
	}
}