class Main {
  constructor(ctx) {
    this.ctx = ctx
    this.rightPressed = false
    this.leftPressed = false
    this.x = 40
    this.y = 40
    this.fps = 60
    this.Paddle = new Paddle(this.ctx, 250, 250, 40, 10)
    this.paddleSpeed = 5
  }

  initialize() {
    document.addEventListener('keydown', this.keyDownHandler, false)
    document.addEventListener('keyup', this.keyUpHandler, false)
    setInterval(this.draw, 1000 / this.fps, this)
  }

  draw(main) {
    main.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    main.ctx.font = '20px Arial'
    main.ctx.fillStyle = '#000000'
    main.ctx.fillText('hello', main.x, main.y)

    main.moveRight()
    main.moveLeft()
  }

  moveRight(){
    if(this.rightPressed){
      this.x += this.paddleSpeed
    }
  }

  moveLeft(){
    if(this.leftPressed){
      this.x -= this.paddleSpeed
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
