class Bubble {
  constructor(x, y, r = 50, speed = 0) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.brightness = 0;
    this.maxSpeed = 5;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);

  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {

    if (this.speed > 0) {
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
      }

      if (keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
      }
    }else{
      // this.speed = (width / 2) - mouseX;
      // if (this.speed > this.maxSpeed) {
      //   this.speed = this.maxSpeed;
      // }
      // if (this.speed < -this.maxSpeed) {
      //   this.speed = -this.maxSpeed;
      // }
      // this.x += this.speed;
      //
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
