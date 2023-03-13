class Ball {
  constructor(ctx, x, y, radius, speed) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.speed = speed
  }

  draw() {
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fillStyle = "blue"
    this.ctx.fill()
    this.move()
  }

  move() {
    let posSpeed = +Math.abs(this.speed)
    let negSpeed = -Math.abs(this.speed)

    this.x = this.x + posSpeed
    this.y = this.y + posSpeed

    if (this.x == this.ctx.canvas.width) {
      this.x = this.x + negSpeed
    }

    if (this.x <= 0) {
      this.x = this.x + posSpeed
    }

    if (this.y >= this.ctx.canvas.height) {
      this.y = this.y + negSpeed
    }

    if (this.y <= 0) {
      this.y = this.y + posSpeed
    }

    console.log(this.x, this.y)
  }
}
