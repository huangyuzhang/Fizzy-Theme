export const isFunction = unknown => typeof unknown === 'function';
export const isNumber = unknown => typeof unknown === "number";
export const isString = unknown => (typeof unknown === 'string' || ((!!unknown && typeof unknown === 'object') && Object.prototype.toString.call(unknown) === '[object String]'));
export const isDate = unknown => (Object.prototype.toString.call(unknown) === '[object Date]' || unknown instanceof Date) && !isNaN(unknown.valueOf());
export const isObject = unknown => ((typeof unknown === 'function' || (typeof unknown === 'object' && !!unknown)) && !Array.isArray(unknown));
export const isEmptyObject = unknown => {
	for (const name in unknown) {
		if (unknown.hasOwnProperty(name)) {
			return false;
		}
	}
	return true;
};


export const isNode = unknown => !!(unknown && unknown.nodeType === HTMLElement | SVGElement);
export const isVideo = unknown => isYoutube(unknown) || isVimeo(unknown) || isHTML5(unknown);
export const isHTML5 = unknown => isNode(unknown) && unknown.tagName === 'VIDEO';
export const isIFrame = unknown => isNode(unknown) && unknown.tagName === 'IFRAME';
export const isYoutube = unknown => isIFrame(unknown) && !!unknown.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
export const isVimeo = unknown => isIFrame(unknown) && !!unknown.src.match(/vimeo\.com\/video\/.*/);