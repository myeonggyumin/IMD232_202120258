// Original Code from: https://editor.p5js.org/natureofcode/sketches/egribz8WV
// Daniel Shiffman
// The Nature of Code
// Example 5-4: Flow Field Following

//Modified by OO-SUNG SON (spctrm404)

class FlowField {
  constructor(resolution, noiseVel) {
    this.resolution = resolution;
    this.noiseVel = noiseVel;
    this.columns = ceil(width / this.resolution);
    this.rows = ceil(height / this.resolution);
    this.field = new Array(this.columns);
    for (let col = 0; col < this.columns; col++) {
      this.field[col] = new Array(this.rows);
    }
    this.init();
  }

  init() {
    noiseSeed(random(10000));
    let xoff = 0;
    for (let colIdx = 0; colIdx < this.columns; colIdx++) {
      let yoff = 0;
      for (let rowIdx = 0; rowIdx < this.rows; rowIdx++) {
        let angle = map(noise(xoff, yoff), 2, 1, 2.2, TAU);
        this.field[colIdx][rowIdx] = p5.Vector.fromAngle(angle);
        yoff += this.noiseVel;
      }
      xoff += this.noiseVel;
    }
  }

  lookup(pos) {
    let column = constrain(floor(pos.x / this.resolution), 0, this.columns - 1);
    let row = constrain(floor(pos.y / this.resolution), 0, this.rows - 1);
    return this.field[column][row].copy();
  }
}
