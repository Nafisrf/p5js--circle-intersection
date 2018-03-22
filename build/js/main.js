"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bubble = function () {
  function Bubble(x, y) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
    var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Bubble);

    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.brightness = 0;
    this.maxSpeed = 5;
  }

  _createClass(Bubble, [{
    key: "intersects",
    value: function intersects(other) {
      var d = dist(this.x, this.y, other.x, other.y);
      return d < this.r + other.r;
    }
  }, {
    key: "changeColor",
    value: function changeColor(bright) {
      this.brightness = bright;
    }
  }, {
    key: "contains",
    value: function contains(px, py) {
      var d = dist(px, py, this.x, this.y);
      if (d < this.r) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "move",
    value: function move() {

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
      } else {
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
  }, {
    key: "show",
    value: function show() {
      stroke(255);
      strokeWeight(4);
      fill(this.brightness, 125);
      ellipse(this.x, this.y, this.r * 2);
    }
  }]);

  return Bubble;
}();

var bubbles = [];

function setup() {
  createCanvas(1000, 600);

  for (var i = 0; i < 50; i++) {
    var x = random(0, width);
    var y = random(0, height);
    var r = random(25, 50);
    var speed = random(2, 12);

    bubbles[i] = new Bubble(x, y, r, speed);
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {

    var overlapping = false;

    bubbles[i].move();
    bubbles[i].show();

    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        overlapping = true;
      }
    }

    if (overlapping) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
  }

  // console.log(bubbles.length);
}