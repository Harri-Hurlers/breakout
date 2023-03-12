class Main {
  constructor(){
    this.canvas = document.getElementById("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.rightPressed = false
    this.leftPressed = false
    this.x = 40
    this.y = 40  
  }

  run() {
    // if (this.rightPressed === true){
    //   this.x + 1
    // }
    // if (this.leftPressed === true){
    //   this.x - 1
    // }
  }

  draw(){
    console.log(this.x, this.y)
    document.addEventListener("keydown", this.keyDownHandler(), false)
    document.addEventListener("keyup", this.keyUpHandler, false)

    this.ctx.font = "20px Arial"
    this.ctx.fillStyle = "#000000"
    this.ctx.fillText("hello", this.x, this.y)
  }

  keyDownHandler(key, x) {
    if (key.code === "ArrowRight") {
      this.rightPressed = true
      console.log("Pressing Right Down", x)
      this.x += 1
    }
    
    if (key.code === "ArrowLeft") {
      this.leftPressed = true
      console.log("Pressed Left Down")
      this.x -= 1
    }
  }

  
  keyUpHandler(key) {
    if (key.code === "ArrowRight") {
      this.rightPressed = false
      console.log("Pressing Right Up", this.x)
    }
    
    if (key.code === "ArrowLeft") {
      this.leftPressed = false
      console.log("Pressing Left Up", this.x)
    }
  }
}