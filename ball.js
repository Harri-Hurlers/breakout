class Ball {
  constructor(ctx, {
    x = 240, 
    y = 360, 
    radius = 5, 
    speed = 5,
  }) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.left = this.x - this.radius
    this.right = this.x + this.radius
    this.top = this.y - this.radius
    this.bottom = this.y + this.radius
    this.xSpeed = speed
    this.ySpeed = -speed
  }

  draw(main) {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.closePath()
    this.ctx.fillStyle = "blue"
    this.ctx.fill()
    this.move()
    this.checkWallCollision()
    this.checkBrickCollision(main)
    this.checkPaddleCollision(main)
  }

  move(){
    this.x += this.xSpeed
    this.y += this.ySpeed
    this.left = this.x - this.radius
    this.right = this.x + this.radius
    this.top = this.y - this.radius
    this.bottom = this.y + this.radius
  }

  checkWallCollision(){
    if(this.x + this.radius === this.ctx.canvas.width || this.x - this.radius === 0){
      this.xSpeed = -this.xSpeed
    }

    if(this.y + this.radius === this.ctx.canvas.height || this.y - this.radius === 0){
      this.ySpeed = -this.ySpeed
    }
  }

  checkPaddleCollision(main){
    const paddle = main.Paddle.rect
    if(this.x >= paddle.x &&
      this.x <= paddle.x + paddle.width &&
      this.y >= paddle.y &&
      this.y <= paddle.y + paddle.height) {
        this.ySpeed = -this.ySpeed
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
          }
      }
    }
  }
}
