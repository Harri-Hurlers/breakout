class Paddle {
  constructor({ ctx, x, y, width, height, speed, color = "black" }) {
    this.rect = new Rect(x, y, width, height)
    this.ctx = ctx
    this.speedDampen = 1
    this.speed = speed * this.speedDampen
    this.frameCount = 0
    this.color = color
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.shadowColor = this.color
    this.ctx.shadowBlur = 10
    this.ctx.shadowOffsetX = 0
    this.ctx.shadowOffsetY = 0
    this.ctx.fillRect(
      this.rect.x,
      this.rect.y,
      this.rect.width,
      this.rect.height
    )
  }

  moveHorizontal(direction) {
    this.rect.x += this.speed * direction
    this.checkBoundary()
  }

  moveVertical(direction) {
    this.rect.y += this.speed * direction
    this.checkBoundary()
  }

  checkBoundary() {
    if (this.rect.left <= 0) {
      this.rect.left = 0
    }
    if (this.rect.right >= this.ctx.canvas.width) {
      this.rect.right = this.ctx.canvas.width
    }
    if (this.rect.top <= 0) {
      this.rect.top = 0
    }
    if (this.rect.bottom >= this.ctx.canvas.height) {
      this.rect.bottom = this.ctx.canvas.height
    }
  }
}
