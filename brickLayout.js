class BrickLayout {
  constructor(ctx, {
    bricksPerRow = 10,
    brickRows = 5,
  }){
    this.ctx = ctx
    this.bricksPerRow = bricksPerRow
    this.brickRows = brickRows
    this.isLayoutDrawn = false
    this.layoutGrid = new Array(this.bricksPerRow)
    this.maxBrickHealth = 5
    this.savedGrid = undefined
    this.rowClearCounter = this.bricksPerRow
  }

  draw(main){
    if(!this.savedGrid) return this.createGrid()
    for(let i = 0; i < this.brickRows; i++){
      // if(this.rowClearCounter <= 0) main.updateScore(5)
      this.rowClearCounter = this.bricksPerRow
      for(let j = 0; j < this.bricksPerRow; j++){
        const brick = this.savedGrid[i][j]
        brick.draw()
        if(brick.health === 0) {
          this.updateClearCounter()
        }
      }
    }
  }

  createGrid() {
    const brickWidth = ctx.canvas.width / this.bricksPerRow
    const brickHeight = (ctx.canvas.height / 3) / this.brickRows
    let brickY = 0
    
    for(let i = 0; i < this.brickRows; i++) {
      let brickX = 0
      this.layoutGrid[i] = new Array(this.bricksPerRow)

      for(let j = 0; j < this.bricksPerRow; j++) {
        const brick = new Brick(this.ctx, {
          x: brickX,
          y: brickY,
          width: brickWidth,
          height: brickHeight,
          health: 5 - i
        })
        this.layoutGrid[i][j] = brick
        brickX = brickX + brickWidth
      }
      brickY = brickY + brickHeight
    }
    this.savedGrid = this.layoutGrid
  }

  updateClearCounter(){
    this.rowClearCounter--
  }
}