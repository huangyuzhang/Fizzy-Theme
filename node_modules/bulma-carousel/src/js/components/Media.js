import {
	uuid
} from '../utils/';
import {
	isVideo,
	isIFrame,
	isHTML5
} from '../utils/type';

class Player {
	constructor(element) {
		this.id = uuid('player');
		this.element = element;
	}

	play() {
		if (!isVideo()) {
			return;
		}

		if (isIFrame()) {
			this._enableApi().then(() => this._postMessage(this.element, {
				func: 'playVideo',
				method: 'play'
			}));
		} else if (isHTML5()) {
			try {
				this.element.play();
			} catch (e) {}
		}
	}

	pause() {
		if (!isVideo()) {
			return;
		}

		if (isIFrame()) {
			this._enableApi().then(() => this._postMessage(this.element, {
				func: 'pauseVideo',
				method: 'pause'
			}));
		} else if (isHTML5()) {
			this.element.pause();
		}
	}

	mute() {
		if (!isVideo()) {
			return;
		}

		if (isIFrame()) {
			this._enableApi().then(() => this._postMessage(this.element, {
				func: 'mute',
				method: 'setVolume',
				value: 0
			}));
		} else if (isHTML5()) {
			this.element.muted = true;
			this.element.setAttribute('muted', '');
		}
	}

	_enableApi() {
		if (this.ready) {
			return this.ready;
		}

		const youtube = isYoutube();
		const vimeo = isVimeo();

		let poller;

		if (youtube || vimeo) {
			return this.ready = new Promise(resolve => {
				once(this.element, 'load', () => {
					if (youtube) {
						const listener = () => this._postMessage(this.element, {
							event: 'listening',
							id: this.id
						});
						poller = setInterval(listener, 100);
						listener();
					}
				});

				this._listen(data => youtube && data.id === this.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this.id)
					.then(() => {
						resolve();
						poller && clearInterval(poller);
					});

				this.element.setAttribute('src', `${this.element.src}${this.element.src.includes('?') ? '&' : '?'}${youtube ? 'enablejsapi=1' : `api=1&player_id=${this.id}`}`);

			});

		}
		return Promise.resolve();
	}

	_postMessage(element, cmd) {
		try {
			element.contentWindow.postMessage(JSON.stringify({
				event: 'command',
				...cmd
			}), '*');
		} catch (e) {}
	}

	_listen(cb) {
		return new Promise(resolve => {
			once(window, 'message', (_, data) => resolve(data), false, ({data}) => {
				if (!data || !isString(data)) {
					return;
				}

				try {
					data = JSON.parse(data);
				} catch (e) {
					return;
				}

				return data && cb(data);

			});
		});
	}
}