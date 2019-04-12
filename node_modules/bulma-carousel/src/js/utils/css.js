import {
	isObject,
	isString
} from './type';

export const addClasses = (element, classes) => {
	classes = Array.isArray(classes) ? classes : classes.split(' ');
	classes.forEach(cls => {
		element.classList.add(cls);
	})
};

export const removeClasses = (element, classes) => {
	classes = Array.isArray(classes) ? classes : classes.split(' ');
	classes.forEach(cls => {
		element.classList.remove(cls);
	})
};

export const show = elements => {
	elements = Array.isArray(elements) ? elements : [elements];
	elements.forEach(element => {
		element.style.display = '';
	});
};

export const hide = elements => {
	elements = Array.isArray(elements) ? elements : [elements];
	elements.forEach(element => {
		element.style.display = 'none';
	});
};

export const offset = element => {
	const rect = element.getBoundingClientRect();
	return {
		top: rect.top + document.body.scrollTop,
		left: rect.left + document.body.scrollLeft
	};
};

// returns an element's width
export const width = (element) => element.getBoundingClientRect().width || element.offsetWidth;
// returns an element's height
export const height = (element) => element.getBoundingClientRect().height || element.offsetHeight;

export const outerHeight = (element, withMargin = false) => {
	let height = element.offsetHeight;
	if (withMargin) {
		const style = window.getComputedStyle(element);
		height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	}
	return height;
};

export const outerWidth = (element, withMargin = false) => {
	let width = element.offsetWidth;
	if (withMargin) {
		const style = window.getComputedStyle(element);
		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	}
	return width;
};

export const position = element => {
	return {
		left: element.offsetLeft,
		top: element.offsetTop
	};
};

export const css = (element, obj) => {
	if (!obj) {
		return window.getComputedStyle(element);
	}
	if (isObject(obj)) {
		let style = '';
		Object.keys(obj).forEach(key => {
			style += key + ': ' + obj[key] + ';';
		});

		element.style.cssText += style;
	}
};