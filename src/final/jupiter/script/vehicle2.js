class Vehicle2 {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.lifespan = 300;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.lifespan -= 2.0;
    this.acc.mult(0);
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  display() {
    tint(255, 100);
    imageMode(CENTER);
    image(img, this.pos.x, this.pos.y);
  }

  follow(flow) {
    const desired = flow.lookup(this.pos);
    desired.mult(this.speedMx);
    const steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  borderInfinite() {
    if (this.pos.x < -40) {
      this.pos.x = width + 40;
    } else if (this.pos.x > width + 40) {
      this.pos.x = -40;
    }
    if (this.pos.y < -40) {
      this.pos.y = height + 40;
    } else if (this.pos.y > height + 40) {
      this.pos.y = -40;
    }
  }
}
