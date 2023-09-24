let position;
let velocity;
let acceleration;
let topSpeed = 5;

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
  drawRandomLine(v0, v1.mult(50), 'red');
  drawRandomLine(v0, v1.mult(50), 'blue');
}

function drawRandomLine(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(2);
  fill(myColor);

  let randomEndpoint = createVector(random(width), random(height));
  let basePoint = createVector(position.x, position.y);
  let randomVec = p5.Vector.sub(randomEndpoint, basePoint);

  randomVec.limit(100);

  let endpoint = p5.Vector.add(basePoint, randomVec);

  line(position.x, position.y, endpoint.x, endpoint.y);

  pop();
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
