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
    this.Paddle = new Paddle({
      ctx: this.ctx,
      x: 290,
      y: 460,
      width: 65,
      height: 13,
      speed: 10,
    })
    this.brickLayout = new BrickLayout(this.ctx, {  bricksPerRow: 10, brickRows: 5,})
    this.collisionDetected = false
    this.Ball = new Ball(ctx, {
      x: 240, 
      y: 360, 
      radius: 5, 
      speed: 5,
    })
  }

  initialize() {
    main.brickLayout.createGrid(main.Ball)
    setInterval(this.draw, 1000 / this.fps, this)
  }

  draw(main) {
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    this.ctx.font = "18px Arial"
    this.ctx.fillStyle = "blue"
    this.ctx.fillText(`${main.Ball.x}, ${main.Ball.y}`, 560, 440)
    this.ctx.fillStyle = "black"
    this.ctx.fillText(`${main.Paddle.rect.x}, ${main.Paddle.rect.y}`, 560, 460)
    if (this.collisionDetected) {
      this.ctx.fillStyle = "red"
      this.ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    main.brickLayout.draw(main.Ball)
    main.Paddle.draw()
    main.Ball.draw(main)
    // this.brick.draw(ctx)

    if (main.rightPressed) {
      main.Paddle.moveHorizontal(1)
    }
    if (main.leftPressed) {
      main.Paddle.moveHorizontal(-1)
    }
    if (main.upPressed) {
      main.Paddle.moveVertical(-1)
    }
    if (main.downPressed) {
      main.Paddle.moveVertical(1)
    }
  }

  keyDown(event) {
    if (event.code === "ArrowRight") {
      this.rightPressed = true
    }
    if (event.code === "ArrowLeft") {
      this.leftPressed = true
    }
    if (event.code === "ArrowUp") {
      this.upPressed = true
    }
    if (event.code === "ArrowDown") {
      this.downPressed = true
    }
  }

  keyUp(event) {
    if (event.code === "ArrowRight") {
      this.rightPressed = false
    }
    if (event.code === "ArrowLeft") {
      this.leftPressed = false
    }
    if (event.code === "ArrowUp") {
      this.upPressed = false
    }
    if (event.code === "ArrowDown") {
      this.downPressed = false
    }
  }
}
