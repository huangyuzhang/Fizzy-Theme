/**
 * dispatch custom events
 *
 * @param  {element} el         slideshow element
 * @param  {string}  type       custom event name
 * @param  {object}  detail     custom detail information
 */
export const dispatchEvent = (target, type, detail) => {
	let event = new CustomEvent(
		type, {
			bubbles: true,
			cancelable: true,
			detail: detail
		}
	);
	target.dispatchEvent(event);
};

export const on = (el, events, listener, useCapture = false) => {
	let events = events.split(' ');
	events.forEach(type => {
		el.addEventListener(type, listener, useCapture);
	});
};

export const one = (el, type, listener, useCapture = false) => {
	let types = type.split(' ');
	types.forEach(type => {
		el.addEventListener(type, e => {
			e.target.removeEventListener(e.type, arguments.callee);
			listener(e);
		}, useCapture);
	});
};

export const off = (el, type, listener, useCapture = false) => {
	let types = type.split(' ');
	types.forEach(type => {
		el.removeEventListener(type, listener, useCapture);
	});
};

export const once = (...args) => {
	const [el, type, listener, useCapture, condition] = args;
	const off = on(el, type, e => {
		const result = !condition || condition(e);
		if (result) {
			off();
			listener(e, result);
		}
	}, useCapture);

	return off;
};

export const trigger = (el, type, options) => {
	var event;
	if (window.CustomEvent) {
		event = new CustomEvent(type, options);
	} else {
		event = document.createEvent('CustomEvent');
		event.initCustomEvent(type, true, true, options);
	}
	el.dispatchEvent(event);
};