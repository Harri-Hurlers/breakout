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
  }

  set x(x) {
    this._x = x
    this.left = this.x
    this.right = this.x + this.width
  }

  get x() {
    return this._x
  }

  set y(y) {
    this._y = y
    this.top = this.y
    this.bottom = this.y + this.height
  }

  get y() {
    return this._y
  }

  set y(y) {
    this._y = y
    this.top = this.y
    this.bottom = this.y + this.height
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
}
