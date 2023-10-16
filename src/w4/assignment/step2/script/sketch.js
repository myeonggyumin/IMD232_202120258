let moverA;
let gravity;
let mVec;
let pMVec;
let isMouseDraggingMover = false;
let savedVelocity;
let savedAcceleration;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  gravity = createVector(0, 0.1);
  throwForce = createVector(0, 0);

  mVec = createVector();
  pMVec = createVector();
}

function draw() {
  background(255);
  const force = p5.Vector.mult(gravity, moverA.mass);

  if (isMouseDraggingMover) {
    moverA.vel.set(0, 0);
    moverA.acc.set(0, 0);
  } else {
    let gravityA = createVector(gravity.x, gravity.y);
    gravityA.mult(moverA.mass);
    moverA.applyForce(gravityA);
  }

  if (moverA.contactEdge()) {
    let c = 0.01;
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  moverA.handleHover(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  moverA.handlePress(mouseX, mouseY);

  isMouseDraggingMover = true;
  savedVelocity = createVector(moverA.vel.x, moverA.vel.y);
  savedAcceleration = createVector(moverA.acc.x, moverA.acc.y);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  moverA.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  moverA.stopDragging();
  throwForce = createVector(mouseX - pmouseX, mouseY - pmouseY);
  moverA.applyForce(throwForce);
  isMouseDraggingMover = false;
}

function isMouseInsideCanvas() {
  return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}
