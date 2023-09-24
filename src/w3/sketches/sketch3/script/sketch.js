let position;
let velocity;
let acceleration;
let circleRadius = 20;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  position = createVector(width / 2, height / 2);
  velocity = createVector();
  acceleration = createVector();
}

function draw() {
  background(225);

  let mouse = createVector(mouseX, mouseY);
  let direction = p5.Vector.sub(mouse, position);
  direction.normalize();
  direction.mult(0.1);

  acceleration = direction;

  velocity.add(acceleration);
  position.add(velocity);

  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(position.x, position.y, circleRadius * 2);

  line(position.x, position.y, mouseX, mouseY);

  strokeWeight(1);
  fill('blue');
  line(position.x, position.y, position.x / 1.2, position.y / 1.2);
}
