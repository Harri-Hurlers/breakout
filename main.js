class Main {
  constructor(ctx) {
    this.ctx = ctx
    this.rightPressed = false
    this.leftPressed = false
    this.x = 40
    this.y = 40
    this.fps = 60
    this.Paddle = new Paddle(this.ctx, 250, 250, 40, 10, 3)
  }

  initialize() {
    setInterval(this.draw, 1000 / this.fps, this)
  }

  draw(main) {
    main.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    main.Paddle.draw()
    main.ctx.font = '20px Arial'
    main.ctx.fillStyle = '#000000'
    main.ctx.fillText('hello', main.x, main.x)

    if (main.rightPressed) {
      main.Paddle.move(1)
      main.x += 1
    }
    if (main.leftPressed) {
      main.Paddle.move(-1)
      main.x -= 1
    }
  }

  keyDown(event) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = true
    }

    if (event.code === 'ArrowLeft') {
      this.leftPressed = true
    }
  }

  keyUp(event) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = false
    }

    if (event.code === 'ArrowLeft') {
      this.leftPressed = false
    }
  }
}
