class Brick {
  constructor({
    x = 0,
    y = 0,
    width = 50,
    height = 15,
    radius = 3,
    fillColor = '#00ff00',
    strokeColor = '#0000ff',
    strokeSize = 5,
    health = 4,
  }){
    this.x = x + Math.round(strokeSize / 2)
    this.y = y + Math.round(strokeSize / 2)
    this.width = Math.round(width - strokeSize)
    this.height = Math.round(height - strokeSize)
    this.health = health
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.strokeSize = strokeSize
    this.radius = radius
    this.collisionRect = new Rect(this.x, this.y, this.width, this.height)
  }

  draw(ctx){
    this.roundRect(
      ctx, 
      this.x,
      this.y,
      this.x + this.width,
      this.y + this.height,
      this.radius
    )
  }

  roundRect(ctx, x0, y0, x1, y1, r){
    const w = x1 - x0;
    const h = y1 - y0;
    if (r > w/2) r = w/2;
    if (r > h/2) r = h/2;
    ctx.beginPath();
    ctx.moveTo(x1 - r, y0);
    ctx.quadraticCurveTo(x1, y0, x1, y0 + r);
    ctx.lineTo(x1, y1-r);
    ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
    ctx.lineTo(x0 + r, y1);
    ctx.quadraticCurveTo(x0, y1, x0, y1 - r);
    ctx.lineTo(x0, y0 + r);
    ctx.quadraticCurveTo(x0, y0, x0 + r, y0);
    ctx.closePath();
    ctx.fillStyle = this.getHealthColor().fill;
    ctx.fill();
    ctx.strokeStyle = this.getHealthColor().stroke
    ctx.lineWidth = this.strokeSize
    ctx.stroke()
  }

  isCollision(main){
    let collider
    if(!main.Ball) {
      collider = main.Paddle.rect
    } else {
      collider = main.Ball.rect
    }
    
    const checkCollision = collider.top <= this.collisionRect.bottom && collider.bottom >= this.collisionRect.top && collider.left <= this.collisionRect.right && collider.right >= this.collisionRect.left

    main.collisionDetected = checkCollision
    if(checkCollision) {
      this.health--
    }
  }

  getHealthColor(){
    switch(this.health) {
      case 1: //green
        return {
          fill: "#66ff66",
          stroke: "#009900"
        }
      case 2: //yellow
        return {
          fill: "#ffff00",
          stroke: "#b3b300"
        }
      case 3: //orange
        return {
          fill: "#ffcc99",
          stroke: "#e67300"
        }
      case 4: //red
        return {
          fill: "#ff0000",
          stroke: "#800000"
        }
      case 5: //purple
        return {
          fill: "#9966ff",
          stroke: "#330080"
        }
      default: //black
        return {
          fill: "#666666",
          stroke: "#000000"
        }
    }
  }
}