class Main {
  constructor(ctx) {
    this.ctx = ctx
    this.rightPressed = false
    this.leftPressed = false
    this.upPressed = false
    this.downPressed = false
    this.x = 40
    this.y = 40
    this.fps = 60
    this.Paddle = new Paddle(this.ctx, 290, 460, 60, 10, 3)
  }

  initialize() {
    setInterval(this.draw, 1000 / this.fps, this)
  }

  draw(main) {
    main.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    main.Paddle.draw()
    main.ctx.font = '20px Arial'
    main.ctx.fillStyle = '#000000'
    main.ctx.fillText('hello', main.x, main.y)

    if (main.rightPressed) {
      main.Paddle.move(1)
    }
    if (main.leftPressed) {
      main.Paddle.move(-1)
    }
    if (main.upPressed) {
      main.Paddle.move2(-1)
    }
    if (main.downPressed) {
      main.Paddle.move2(1)
    }
  }

  keyDown(event) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = true
    }
    if (event.code === 'ArrowLeft') {
      this.leftPressed = true
    }
    if (event.code === 'ArrowUp') {
      this.upPressed = true
    }
    if (event.code === 'ArrowDown') {
      this.downPressed = true
    }
  }

  keyUp(event) {
    if (event.code === 'ArrowRight') {
      this.rightPressed = false
    }
    if (event.code === 'ArrowLeft') {
      this.leftPressed = false
    }
    if (event.code === 'ArrowUp') {
      this.upPressed = false
    }
    if (event.code === 'ArrowDown') {
      this.downPressed = false
    }
  }
}
