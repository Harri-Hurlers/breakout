class Ball {
  constructor(ctx, x, y, radius, speed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
  }

  draw() {
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
    this.move();
  }

  move(speed) {
    if (this.x >= this.ctx.canvas.width) {
      this.x -= this.speed;
    }
    if (this.x <= 0) {
      this.x += this.speed;
    }

    if (this.y >= this.ctx.canvas.height) {
      this.y -= this.speed;
    }

    if (this.y <= 0) {
      this.y += this.speed;
    }
  }
}
