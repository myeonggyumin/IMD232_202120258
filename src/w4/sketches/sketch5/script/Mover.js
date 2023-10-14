class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force) {
    //force.div(this.mass);
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  checkEdges() {
    const bounce = -0.9;

    if (this.pos.x < 0 + this.radius) {
      this.pos.x -= 0 + this.radius;
      this.pos.x *= bounce;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= bounce;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= bounce;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  //edgeBounce() {
  //  if (this.pos.x < 0 + this.radius) {
  //    let delta = this.pos.x - (0 + this.radius);
  //    this.pos.x += 2 * delta;
  //    this.vel.x *= -1;
  //  } else if (this.pos.x > width - 1 - this.radius) {
  //    let delta = this.pos.x - (width - 1 - this.radius);
  //    this.pos.x += 2 * delta;
  //    this.vel.x *= -1;
  //  }
  //  if (this.pos.y > width - 1 - this.radius) {
  //    let delta = this.pos.y - (width - 1 - this.radius);
  //    this.pos.y += 2 * delta;
  //    this.vel.y *= -1;
  //  }
  //}
  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
