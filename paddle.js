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
    this.ctx.font = '20px Arial'
    this.ctx.fillStyle = '#000000'
    this.ctx.fillText('hello', this.x, this.y)
  }

  move(direction) {
    this.x += this.speed * direction
    this.checkBoundary()
  }

  checkBoundary() {
    if (this.x <= 0) {
      this.x = 0
    }
    if (this.x >= this.ctx.canvas.width) {
      this.x = 640
    }
  }
}
