class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
    this.color = color(random(360), 100, 50, 10);
  }

  addParticle() {
    let numParticles = 120;
    let angleIncrement = TAU / numParticles;
    for (let i = 0; i < 120; i++) {
      let angle = i * angleIncrement;
      let bang = new Particle(this.pos.x, this.pos.y);
      bang.vel.x = Math.cos(angle) * 4;
      bang.vel.y = Math.sin(angle) * 4;
      this.particles.push(bang);
    }
  }

  update(gravity) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}
