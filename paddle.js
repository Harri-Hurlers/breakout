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
    console.log('drawing')
    this.ctx.font = '20px Arial'
    this.ctx.fillStyle = '#000000'
    this.ctx.fillText('hello', this.x, this.x)
  }

  move(direction) {
    this.x += this.speed * direction
  }
}
