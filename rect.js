class Rect {
  constructor(x, y, width, height) {
    this._x = x
    this._y = y
    this.width = width
    this.height = height
    this._top = this.y
    this._bottom = this.y + height
    this._left = this.x
    this._right = this.x + width
    this._centerX = this.x + this.width / 2
    this._centerY = this.y + this.height / 2
  }

  set x(x) {
    this._x = x
    this._left = this._x
    this._right = this._x + this.width
    this._centerX = this._x + this.width / 2
  }

  get x() {
    return this._x
  }

  set y(y) {
    this._y = y
    this._top = this._y
    this._bottom = this._y + this.height
    this._centerY = this._y + this.height / 2
  }

  get y() {
    return this._y
  }

  set y(y) {
    this._y = y
    this._top = this._y
    this._bottom = this._y + this.height
  }

  get y() {
    return this._y
  }

  set right(x) {
    this._right = x
    this._x = this._right - this.width
  }

  get right() {
    return this._right
  }

  set left(x) {
    this._left = x
    this._x = x
  }

  get left() {
    return this._left
  }

  set bottom(y) {
    this._bottom = y
    this._y = this._bottom - this.height
  }

  get bottom() {
    return this._bottom
  }

  set top(y) {
    this._top = y
    this._y = y
  }

  get top() {
    return this._top
  }

  get centerX() {
    return this._centerX
  }

  get centerY() {
    return this._centerY
  }
}
