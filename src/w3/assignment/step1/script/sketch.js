let position;
let velocity;
let acceleration;
let topSpeed = 5;
let weightLimit;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  position = createVector(random(width), random(height));
  position2 = createVector(random(width), random(height));
  velocity = createVector();
  acceleration = createVector();
}

function draw() {
  background(255);
  update();
  checkEdges();
  show();
  let mouse = createVector(mouseX, mouseY);
  let circleCenter = createVector(position.x, position.y);

  strokeWeight(4);
  stroke(0);
  line(position.x, position.y, mouse.x, mouse.y);
}

function update() {
  acceleration = p5.Vector.random2D();
  acceleration.mult(random(2));
  velocity.add(acceleration);
  velocity.limit(topSpeed);
  position.add(velocity);
}

function show() {
  stroke(0);
  strokeWeight(2);
  fill(0);
  circle(position.x, position.y, 48);

  let v0 = createVector();
  let v1 = p5.Vector.random2D();
  drawArrow(v0, v1.mult(50), 'red');
  drawArrow(v0, v1.mult(50), 'blue');
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(2);
  fill(myColor);
  //let wL0 = createVector(position.x, position.y);
  //let wL1 = createVector(random(width),random(height));
  //line(wL0,wL1)

  line(position.x, position.y, random(width), random(height));
  //weightLimit = p5.Vector.sub(v0, v1);
  //weightLimit.limit(2);
}

function checkEdges() {
  if (position.x > width) {
    position.x = 0;
  } else if (position.x < 0) {
    position.x = width;
  }

  if (position.y > height) {
    position.y = 0;
  } else if (position.y < 0) {
    position.y = height;
  }
}
