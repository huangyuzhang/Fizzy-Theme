export const uuid = (prefix = '') => prefix + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
export const isRtl = () => document.documentElement.getAttribute('dir') === 'rtl';

export const defer = function () {
	this.promise = new Promise((function (resolve, reject) {
		this.resolve = resolve;
		this.reject = reject;
	}).bind(this));

	this.then = this.promise.then.bind(this.promise);
	this.catch = this.promise.catch.bind(this.promise);
};


export const getNodeIndex = node => [...node.parentNode.children].indexOf(node);
export const camelize = str => str.replace(/-(\w)/g, toUpper);