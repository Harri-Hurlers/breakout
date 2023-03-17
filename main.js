class Main {
  constructor(ctx) {
    this.ctx = ctx
    this.rightPressed = false
    this.leftPressed = false
    this.upPressed = false
    this.downPressed = false
    this.x = 40
    this.y = 40
    // this.fps = 120
    this.isGameOver = false
    this.score = 0
    this.collisionDetected = false
    this.mouseClickCoord = {
      x: 0,
      y: 0
    }
    this.playAgainCoords = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
    this.Paddle = new Paddle({
      ctx: this.ctx,
      x: 290,
      y: 400,
      width: 65,
      height: 13,
      speed: 1,
      color: 'white'
    })
    this.brickLayout = new BrickLayout(this.ctx, {  bricksPerRow: 10, brickRows: 5,})
    this.Ball = new Ball(ctx, {
      x: 240, 
      y: 360, 
      radius: 5, 
      xSpeed: 10,
      ySpeed: 10,
      color: 'cyan'
    })
  }

  initialize() {
    main.brickLayout.createGrid()
    // setInterval(this.draw, 1000 / this.fps, this)
  }

  draw() {
    main.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
    main.printScore()
    if(main.isGameOver){
      main.showGameOver()
      main.showPlayAgain(300, 250)
      main.isPlayAgainClicked()
      return
    }

    main.brickLayout.draw()
    main.Paddle.draw()
    main.Ball.draw(main)

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
    window.requestAnimationFrame(main.draw)
  }

  clearScore(){
    this.score = 0
  }

  updateScore(points){
    this.score = this.score + points
  }

  printScore(){
    this.ctx.font = "38px A-OTF Shin Go Pro B"
    this.ctx.fillStyle = "white"
    this.ctx.fillText(this.score, 20, ctx.canvas.height * .96)
  }

  showGameOver(){
    document.exitPointerLock();
    this.ctx.font = "38px A-OTF Shin Go Pro B"
    this.ctx.fillStyle = "red"
    this.ctx.fillText('GAME OVER', ctx.canvas.width / 3, ctx.canvas.height / 2)

    
    // this.ctx.font = "20px A-OTF Shin Go Pro B"
    // this.ctx.fillStyle = "green"
    // this.ctx.strokeStyle = "green"
    // this.ctx.fillText('PLAY', ctx.canvas.width / 2 - 60, ctx.canvas.height - 100)
    // this.ctx.fillText('AGAIN', ctx.canvas.width / 2 - 65, ctx.canvas.height - 80)
    // this.ctx.strokeRect(ctx.canvas.width / 2 - 70, ctx.canvas.height - 130, 90, 60)
  }

  showPlayAgain(x, y){
    const textX = x + 16
    const textY = y + 26
    const buttonW = 95
    const buttonH = 58
    this.ctx.font = "20px A-OTF Shin Go Pro B"
    this.ctx.fillStyle = "green"
    this.ctx.strokeStyle = "green"
    this.ctx.fillText('PLAY', textX, textY)
    this.ctx.fillText('AGAIN', textX - 7, textY + 20)
    this.ctx.strokeRect(x, y, buttonW, buttonH)
    this.playAgainCoords = {
      x,
      y,
      buttonW,
      buttonH
    }
  }

  isPlayAgainClicked(){
    if(this.mouseClickCoord.x >= this.playAgainCoords.x && this.mouseClickCoord.x <= this.playAgainCoords.width && this.mouseClickCoord.y >= this.playAgainCoords.y && this.mouseClickCoord.y <= this.playAgainCoords.height){
      this.isGameOver = false
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

  mouseMove(canvas, movementX){
    // const rect = canvas.getBoundingClientRect()
    // let mouseX = movementX - rect.left
    main.Paddle.moveHorizontal(movementX)
  }

  mouseDown(x, y){
    canvas.requestPointerLock()
    
    const mouseX = x - canvas.offsetLeft
    const mouseY = y - canvas.offsetTop
    this.mouseClickCoord = {x: mouseX, y: mouseY, cosL: canvas.offsetLeft, cosT: canvas.offsetTop}
  }
}
