let bubbles = [];

function setup() {
  createCanvas(1000, 600);

  for (let i = 0; i < 50; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(25, 50);
    let speed = random (2, 12);

    bubbles[i] = new Bubble(x, y, r, speed);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {

    let overlapping = false;

    bubbles[i].move();
    bubbles[i].show();

    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        overlapping = true;
      }
    }

    if (overlapping) {
      bubbles[i].changeColor(255);

    }else{
      bubbles[i].changeColor(0);

    }

  }

  // console.log(bubbles.length);

}
