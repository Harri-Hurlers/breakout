class Brick {
  constructor( ctx, {
    x = 0,
    y = 0,
    width = 50,
    height = 15,
    radius = 3,
    fillColor = "#00ff00",
    strokeColor = "#0000ff",
    strokeSize = 0,
    health = 4,
  }) {
    this.ctx = ctx
    this.x = x + Math.round(strokeSize / 2)
    this.y = y + Math.round(strokeSize / 2)
    this.width = Math.round(width - strokeSize)
    this.height = Math.round(height - strokeSize)
    this.left = this.x
    this.right = this.x + this.width
    this.top = this.y
    this.bottom = this.y + this.height
    this.health = health
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeSize = strokeSize
    this.radius = radius
  }

  draw() {
    if (this.health >= 1) {
      // this.checkCollision(ball)
      this.roundRect(
        this.x,
        this.y,
        this.x + this.width,
        this.y + this.height,
        this.radius
      )
    }
  }

  roundRect(x0, y0, x1, y1, r) {
    const w = x1 - x0
    const h = y1 - y0
    if (r > w / 2) r = w / 2
    if (r > h / 2) r = h / 2
    this.ctx.beginPath()
    this.ctx.moveTo(x1 - r, y0)
    this.ctx.quadraticCurveTo(x1, y0, x1, y0 + r)
    this.ctx.lineTo(x1, y1 - r)
    this.ctx.quadraticCurveTo(x1, y1, x1 - r, y1)
    this.ctx.lineTo(x0 + r, y1)
    this.ctx.quadraticCurveTo(x0, y1, x0, y1 - r)
    this.ctx.lineTo(x0, y0 + r)
    this.ctx.quadraticCurveTo(x0, y0, x0 + r, y0)
    this.ctx.closePath()
    this.ctx.fillStyle = this.getHealthColor().fill
    this.ctx.strokeStyle = this.getHealthColor().stroke
    this.ctx.fill()
    this.ctx.lineWidth = this.strokeSize
    // this.ctx.stroke()
  }

  takeDamage(damage){
    this.health = this.health - damage
    if(this.health <= 0){
      this.x = 0
      this.y = 0
      this.height = 0
      this.width = 0
    }
  }

  // checkCollision(ball) {
  //   if (ball.right === this.left ||
  //       ball.left === this.right ||
  //       ball.top === this.bottom ||
  //       ball.bottom === this.top)
  //     {
  //       // this.takeDamage(1)
  //       // ball.xSpeed = -ball.xSpeed
  //       return true
  //     }
      
  //     return false
  // }

  getHealthColor() {
    switch (this.health) {
      case 1: //green
        return {
          fill: "#66ff66",
          stroke: "#009900",
        }
      case 2: //yellow
        return {
          fill: "#ffff00",
          stroke: "#b3b300",
        }
      case 3: //orange
        return {
          fill: "#ffcc99",
          stroke: "#e67300",
        }
      case 4: //red
        return {
          fill: "#ff0000",
          stroke: "#800000",
        }
      case 5: //purple
        return {
          fill: "#9966ff",
          stroke: "#330080",
        }
      default: //black
        return {
          fill: "#666666",
          stroke: "#000000",
        }
    }
  }
}
