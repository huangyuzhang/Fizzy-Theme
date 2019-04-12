export const isIE = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
export const isIETouch = (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1);
export const isAndroid = navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/);
export const isiPad = navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/);
export const isiPod = navigator.userAgent.match(/(iPod)(.*OS\s([\d_]+))?/);
export const isiPhone = !navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/) && navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/);
export const isSafari = (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') < 0 && navigator.userAgent.toLowerCase().indexOf('android') < 0);
export const isUiWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);

export const supportsTouchEvents = !!('ontouchstart' in window);
export const supportsPointerEvents = !!('PointerEvent' in window);
export const supportsTouch = supportsTouchEvents || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints; // IE >=11
export const pointerDown = !supportsTouch ? 'mousedown' : `mousedown ${supportsTouchEvents ? 'touchstart' : 'pointerdown'}`;
export const pointerMove = !supportsTouch ? 'mousemove' : `mousemove ${supportsTouchEvents ? 'touchmove' : 'pointermove'}`;
export const pointerUp = !supportsTouch ? 'mouseup' : `mouseup ${supportsTouchEvents ? 'touchend' : 'pointerup'}`;
export const pointerEnter = supportsTouch && supportsPointerEvents ? 'pointerenter' : 'mouseenter';
export const pointerLeave = supportsTouch && supportsPointerEvents ? 'pointerleave' : 'mouseleave';