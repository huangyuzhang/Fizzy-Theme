export default class Coordinate {
	constructor(x = 0, y = 0) {
		this._x = x;
		this._y = y;
	}

	get x() {
		return this._x;
	}

	set x(value = 0) {
		this._x = value;
		return this;
	}

	get y() {
		return this._y;
	}

	set y(value = 0) {
		this._y = value;
		return this;
	}

	add(coord) {
		return new Coordinate(this._x + coord._x, this._y + coord._y);
	}

	sub(coord) {
		return new Coordinate(this._x - coord._x, this._y - coord._y);
	}

	distance(coord) {
		let deltaX = this._x - coord._x;
		let deltaY = this._y - coord._y;

		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}

	max(coord) {
		let x = Math.max(this._x, coord._x);
		let y = Math.max(this._y, coord._y);

		return new Coordinate(x, y);
	}

	equals(coord) {
		if (this == coord) {
			return true;
		}
		if (!coord || coord == null) {
			return false;
		}
		return this._x == coord._x && this._y == coord._y;
	}

	inside(northwest, southeast) {
		if ((this._x >= northwest._x) && (this._x <= southeast._x) &&
			(this._y >= northwest._y) && (this._y <= southeast._y)) {

			return true;
		}
		return false;
	}

	constrain(min, max) {
		if (min._x > max._x || min._y > max._y) {
			return this;
		}

		let x = this._x,
			y = this._y;

		if (min._x !== null) {
			x = Math.max(x, min._x);
		}
		if (max._x !== null) {
			x = Math.min(x, max._x);
		}
		if (min._y !== null) {
			y = Math.max(y, min._y);
		}
		if (max._y !== null) {
			y = Math.min(y, max._y);
		}

		return new Coordinate(x, y);
	}

	reposition(element) {
		element.style['top'] = this._y + 'px';
		element.style['left'] = this._x + 'px';
	}

	toString() {
		return '(' + this._x + ',' + this._y + ')';
	}
}