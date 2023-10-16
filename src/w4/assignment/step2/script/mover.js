class Mover {
  constructor(x, y, mass) {
    this.mVec = createVector(mouseX, mouseY);
    this.pMVec = createVector(pmouseX, pmouseY);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass ** 0.5 * 10;
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector(0, 0);
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  throwingForce() {
    let throwingForce = p5.vector.sub(mVec, pMVec);
    throwingForce.div(this.mass);
    this.acc.add(throwingForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.9;
    if (this.pos.x < 0 + this.radius) {
      this.pos.x -= 0 + this.radius;
      this.pos.x *= -1;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  display() {
    strokeWeight(4);
    stroke(0);
    if (this.isDragging) {
      fill(50);
    } else if (this.isHover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  handleHover(mouseX, mouseY) {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (d < this.radius) {
      this.isHover = true;
    } else {
      this.isHover = false;
    }
  }

  handlePress(mouseX, mouseY) {
    if (!this.isHover) return;
    this.isDragging = true;
    this.draggingOffset.x = this.pos.x - mouseX;
    this.draggingOffset.y = this.pos.y - mouseY;
  }
  stopDragging() {
    this.isDragging = false;
  }

  handleDrag(mouseX, mouseY) {
    if (this.isDragging) {
      this.pos.x = mouseX + this.draggingOffset.x;
      this.pos.y = mouseY + this.draggingOffset.y;
    }
  }
}
