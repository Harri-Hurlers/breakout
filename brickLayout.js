class BrickLayout {
  constructor({
    bricksPerRow = 10,
    brickRows = 5,
  }){
    this.bricksPerRow = bricksPerRow
    this.brickRows = brickRows
    this.isLayoutDrawn = false
    this.layoutGrid = new Array(this.bricksPerRow)
  }

  drawLayout(main){
    const brickWidth = main.ctx.canvas.width / this.bricksPerRow
    const brickHeight = (main.ctx.canvas.height / 3) / this.brickRows
    let brickYOffset = 0
    
    for(let i = 0; i < this.brickRows; i++) {
      let brickXOffset = 0
      this.layoutGrid[i] = new Array(this.bricksPerRow)

      for(let j = 0; j < this.bricksPerRow; j++) {
        const brick = new Brick({
          x: brickXOffset,
          y: brickYOffset,
          width: brickWidth,
          height: brickHeight,
          health: 5 - i
        })
        brick.draw(main.ctx)
        this.layoutGrid[i][j] = brick
        brickXOffset = brickXOffset + brickWidth
      }
      brickYOffset = brickYOffset + brickHeight
    }
  }

  checkCollision(main) {    
    for(let i = 0; i < this.brickRows; i++){
      for(let j = 0; j < this.bricksPerRow; j++){
        const brick = this.layoutGrid[i][j]
        brick.isCollision(main)
      }
    }
  }
}