class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.balls = [];
  }

  createBall() {
    this.balls.push(
      new Ball(
        random(width),
        this.emittingPos.y - 40,
        random(1, 5),
        random(360),
        100,
        50
      )
    );
  }

  applyGravity(gravity) {
    this.balls.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  applyForce(force) {
    this.balls.forEach((each) => {
      each.applyForce(force);
    });
  }

  display() {
    this.balls.forEach((each) => {
      each.display();
    });
  }

  update() {
    for (let index = this.balls.length - 1; index >= 0; index--) {
      this.balls[index].update();
      if (this.balls[index].isDead()) {
        this.balls.splice(index, 1);
      }
    }
  }
}

class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.color = color(h, s, v);
    this.tilt = random(0, 360);
    this.rotationSpeed = random(0, 2);
    this.tilt = random(0, 360);
    this.updateTilt = () => {
      this.tilt += this.rotationSpeed;
    };
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    rotate((this.tilt += this.rotationSpeed));
    rect(0, 0, 10, 10);
    pop();
  }

  isDead() {
    return this.pos.x > width || this.pos.y > height;
  }
}

let emitter;
let balls = [];
let gravity;

function setup() {
  rectMode(CENTER);
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);

  emitter = new Emitter(width / 2, 0);

  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    each.applyForce(scaledG);
    each.update();
    each.display();
  });
  emitter.createBall();
  emitter.applyGravity(gravity);
  emitter.update();
  emitter.display();
  console.log(emitter.balls.length);
}
