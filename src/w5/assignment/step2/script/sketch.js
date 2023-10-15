let pendulumA;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pendulumA = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25);
  gravity = createVector(0, 0.5);

  background(255);
}

function draw() {
  pendulumA.applyGravity(gravity);
  pendulumA.update();
  background(255);
  pendulumA.display();
}

function mouseMoved() {
  pendulumA.mouseMoved(mouseX, mouseY);
  pendulumA.mouseMoved2(mouseX, mouseY);
}

function mousePressed() {
  pendulumA.mousePressed(mouseX, mouseY);
  pendulumA.mousePressed2(mouseX, mouseY);
}

function mouseDragged() {
  pendulumA.mouseDragged(mouseX, mouseY);
  pendulumA.mouseDragged2(mouseX, mouseY);
}

function mouseReleased() {
  pendulumA.mouseReleased();
  pendulumA.mouseReleased2();
}
