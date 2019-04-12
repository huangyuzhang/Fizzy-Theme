export const isInViewport = (element, html) => {
	const rect = element.getBoundingClientRect();
	html = html || document.documentElement;
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || html.clientHeight) &&
		rect.right <= (window.innerWidth || html.clientWidth)
	);
};