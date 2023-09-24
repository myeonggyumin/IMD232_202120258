let mover;
let wind;
let gravity;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);
  wind = createVector(0.2, 0);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);
  mover.addAcc(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.addAcc(wind);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
