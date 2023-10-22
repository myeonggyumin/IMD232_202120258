class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate(random(19, 20));
    this.acc = createVector(0, 0);
    this.rad = 5;
    this.lifeSpan = 60;
    this.color = color(random(360), random(360), random(360));
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 1;
  }

  display() {
    noStroke();
    fill(this.color, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
