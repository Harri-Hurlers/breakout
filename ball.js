class Ball {
  constructor(ctx, {
    x = 240, 
    y = 360, 
    radius = 5, 
    speed = 5,
    color = 'blue',
    xSpeed = speed,
    ySpeed = speed
  }) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.left = this.x - this.radius
    this.right = this.x + this.radius
    this.top = this.y - this.radius
    this.bottom = this.y + this.radius
    this.xSpeed = xSpeed
    this.ySpeed = -ySpeed
    this.color = color
    this.speedDampen = 0.15
    this.wallBoop = new Audio("sounds/E.wav");
    this.paddleBoop = new Audio("sounds/D.wav");
  }

  draw(main) {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.closePath()
    this.ctx.fillStyle = this.color
    this.ctx.shadowColor = this.color
    this.ctx.shadowBlur = 10
    this.ctx.shadowOffsetX = 0
    this.ctx.shadowOffsetY = 0
    this.ctx.fill()
    this.move()
    this.checkWallCollision(main)
    this.checkBrickCollision(main)
    this.checkPaddleCollision(main)
  }

  move(){
    this.x += this.xSpeed * this.speedDampen
    this.y += this.ySpeed * this.speedDampen
    this.left = this.x - this.radius
    this.right = this.x + this.radius
    this.top = this.y - this.radius
    this.bottom = this.y + this.radius
  }

  checkWallCollision(main){
    if(this.x + this.xSpeed >= this.ctx.canvas.width || this.x - this.radius <= 0){
      this.xSpeed = -this.xSpeed
      this.wallBoop.play();
    }

    if(this.y - this.ySpeed <= 0){
      this.ySpeed = -this.ySpeed
      this.wallBoop.play(); 
    }

    if (this.y + this.ySpeed >= this.ctx.canvas.height) {
      // main.isGameOver = true
      this.ySpeed = -this.ySpeed
      this.wallBoop.play(); 
    }
  }

  checkPaddleCollision(main){
    const paddle = main.Paddle.rect
    const isCollision = this.x >= paddle.x && this.x <= paddle.x + paddle.width && this.y >= paddle.y && this.y <= paddle.y + paddle.height

    if(!isCollision) return
    
    this.ySpeed = -this.ySpeed
    this.paddleBoop.play()
    const muliplier = 0.5
    if(this.x >= paddle._centerX) { // Ball hits right side of paddle
      if(Math.sign(this.xSpeed) === -1) {
        this.xSpeed = this.xSpeed - (paddle._centerX - this.x) * muliplier
      } else {
        this.xSpeed = this.xSpeed + (paddle._centerX - this.x) * muliplier
        this.xSpeed = this.xSpeed > 10 ? 10 : this.xSpeed
        this.xSpeed = -this.xSpeed
      }
    }

    if(this.x <= paddle._centerX) {
      if(Math.sign(this.xSpeed) === -1) {
        this.xSpeed = this.xSpeed + (paddle._centerX - this.x) * muliplier
        this.xSpeed = this.xSpeed > 10 ? 10 : this.xSpeed
        this.xSpeed = -this.xSpeed
      } else {
        this.xSpeed = this.xSpeed - (paddle._centerX - this.x) * muliplier
      }
    }
      
  }

  checkBrickCollision(main) {
    const bricks = main.brickLayout.savedGrid
    const bricksPerRow = main.brickLayout.bricksPerRow
    const brickRows = main.brickLayout.brickRows
    let i, j
    for (i = 0; i < brickRows; i++){
      for(j = 0; j < bricksPerRow; j++){
        const brick = bricks[i][j]

        if(this.x >= brick.x &&
          this.x <= brick.x + brick.width &&
          this.y >= brick.y &&
          this.y <= brick.y + brick.height) {
            this.ySpeed = -this.ySpeed
            brick.takeDamage(1)
            main.updateScore(1)
          }
      }
    }
  }
}
