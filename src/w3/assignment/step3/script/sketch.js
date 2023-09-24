let position;
let velocity;
let acceleration;
let circleRadius = 30;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  position = createVector(width / 2, height / 2);
  velocity = createVector();
  acceleration = createVector();
}

function draw() {
  background(225);

  let mouse = createVector(mouseX, mouseY);

  if (mouseIsPressed === true) {
    let direction = p5.Vector.sub(position, mouse);
    direction.normalize();
    direction.mult(0.1);

    acceleration = direction;

    velocity.add(acceleration);
    position.add(velocity);
  } else {
    let direction = p5.Vector.sub(mouse, position);
    direction.normalize();
    direction.mult(0.1);

    acceleration = direction;

    velocity.add(acceleration);
    position.add(velocity);
  }

  if (mouseIsPressed === true) {
    noStroke();
    fill(255, 0, 0, 63);
    circle(mouseX, mouseY, 30);
  }

  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(position.x, position.y, circleRadius * 2);

  line(position.x, position.y, mouseX, mouseY);

  stroke(0, 0, 255);
  strokeWeight(1);
  line(position.x, position.y, position.x / 1.2, position.y * 1.2);
}
