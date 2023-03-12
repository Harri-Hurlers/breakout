class Main {
  constructor(ctx) {
    this.ctx = ctx
    this.rightPressed = false
    this.leftPressed = false
    this.x = 40
    this.y = 40
    this.fps = 60
    this.Paddle = new Paddle(this.ctx, 250, 250, 40, 10)
  }

  initialize() {
    document.addEventListener('keydown', this.keyDownHandler, false)
    document.addEventListener('keyup', this.keyUpHandler, false)
    setInterval(this.draw, 1000 / this.fps, this)
  }

  draw(main) {
    console.log('Hello', main.x, main.y)
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    this.ctx.font = '20px Arial'
    this.ctx.fillStyle = '#000000'
    this.ctx.fillText('hello', main.x, main.x)
  }

  keyDown(event) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = false
      console.log('Pressing Right Down in class', this.x)
    }

    if (event.code === 'ArrowLeft') {
      this.leftPressed = false
      console.log('Pressing Left Down in class', this.x)
    }
  }

  keyUp(event) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = false
      this.x += 1
      console.log('Pressing Right Up in class', this.x)
    }

    if (event.code === 'ArrowLeft') {
      this.leftPressed = false
      this.x -= 1
      console.log('Pressing Left Up in class', this.x)
    }
  }
}
