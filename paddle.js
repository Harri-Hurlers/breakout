class Paddle {
  constructor(ctx, x, y, width, height, speed) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.rect(this.x, this.y, this.width, this.height)
    this.ctx.stroke()
  }

  move(direction) {
    this.x += this.speed * direction
    this.checkBoundary()
  }

  checkBoundary() {
    if (this.x <= 0) {
      this.x = 0
    }
    if (this.x + this.width >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width
    }
  }
}
