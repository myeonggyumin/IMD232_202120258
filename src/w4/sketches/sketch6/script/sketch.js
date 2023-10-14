let moverA;
let moverB;
let gravity;
let wind;
let att;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 10);
  moverB = new Mover((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
  att = new Attractor(width / 2, height / 2, 100);
}

function draw() {
  background(255);

  //let gravityA = createVector(gravity.x, gravity.y);
  //gravityA.mult(moverA.mass);
  //moverA.applyForce(gravityA);
  //if (mouseIsPressed && isMouseInsideCanvas()) {
  //moverA.applyForce(wind);}

  let force1 = att.attract(moverA);
  let force2 = att.attract(moverB);
  moverA.update();
  //moverA.checkEdges();
  moverA.display();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);

  //if (mouseIsPressed && isMouseInsideCanvas()) {
  //  moverB.applyForce(wind);
  //}

  moverB.update();
  //moverB.checkEdges();
  moverB.display();

  att.display();
}
