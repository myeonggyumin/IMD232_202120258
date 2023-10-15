let cNum = 8;
let rNum = 8;
let gridSize; // Adjusted dynamically based on canvas size
let angleIncrement = 15;

let angle;
let angleVel;

function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  gridSize = Math.min(width, height) / 10.4; // Calculate gridSize dynamically
  background(360, 0, 100);

  angle = createVector(0, TAU / 4);
  angleVel = createVector(periodToAngleVel(360), periodToAngleVel(360));
}

function drawRotatingGraphic(x, y, initialAngle) {
  let amplitude = [gridSize / 2 - 10, gridSize / 2 - 10];

  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(x, y, gridSize - 15);

  stroke(0);
  strokeWeight(1);
  fill(255);
  line(
    x,
    y,
    x + sin(angle.x + radians(initialAngle)) * amplitude[0],
    y + sin(angle.y + radians(initialAngle)) * amplitude[1]
  );

  stroke(0);
  strokeWeight(1);
  fill(0);
  ellipse(
    x + sin(angle.x + radians(initialAngle)) * amplitude[0],
    y + sin(angle.y + radians(initialAngle)) * amplitude[1],
    10
  );
}

function draw() {
  background(360, 0, 100);
  let prevRowLastAngle = 0;

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      const x = c * (gridSize + 20) + gridSize;
      const y = r * (gridSize + 20) + gridSize;
      drawRotatingGraphic(x, y, angleIncrement * (c + r) + prevRowLastAngle);
    }
    prevRowLastAngle += 120;
  }
  angle.add(angleVel);
}
