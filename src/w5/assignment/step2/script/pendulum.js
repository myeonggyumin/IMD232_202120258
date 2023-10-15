class Pendulum {
  constructor(x, y, length, angle, rad) {
    this.angle = angle;
    this.angle2 = angle;

    this.angleVel = 0;
    this.angleAcc = 0;
    this.angleVel2 = 0;
    this.angleAcc2 = 0;

    this.pos = createVector(x, y);

    this.length = length;
    this.length2 = length;

    this.ballPos = createVector(x, y);
    this.ballPos.add(
      cos(this.angle) * this.length,
      sin(this.angle) * this.length
    );

    this.rad = rad;

    this.ballPos2 = createVector(x, y);
    this.ballPos2.add(
      cos(this.angle2) * this.length2,
      sin(this.angle2) * this.length2
    );

    this.draggingOffset = createVector();
    this.draggingOffset2 = createVector();
    this.isHover = false;
    this.isDragging = false;
    this.isHover2 = false;
    this.isDragging2 = false;
  }

  applyGravity(gravity) {
    this.angleAcc =
      (sin(this.angle - (TAU / 360) * 90) * -gravity.y) / this.length;
    this.angleAcc2 =
      (sin(this.angle2 - (TAU / 360) * 90) * -gravity.y) / this.length2;
  }

  update() {
    if (!this.isDragging) {
      this.angleVel += this.angleAcc;
      this.angleVel2 += this.angleAcc2;

      this.angle += this.angleVel;
      this.angle2 += this.angleVel2;

      this.angleVel *= 0.99;
      this.angleVel2 *= 0.99;
    }

    if (!this.isDragging2) {
      this.angleVel += this.angleAcc;
      this.angleVel2 += this.angleAcc2;

      this.angle += this.angleVel;
      this.angle2 += this.angleVel2;

      this.angleVel *= 0.99;
      this.angleVel2 *= 0.99;
    }

    this.ballPos.set(
      cos(this.angle) * this.length + this.pos.x,
      sin(this.angle) * this.length + this.pos.y
    );

    this.ballPos2.set(
      cos(this.angle2) * this.length2 + this.ballPos.x,
      sin(this.angle2) * this.length2 + this.ballPos.y
    );
  }

  display() {
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    if (this.isDragging) {
      fill('#ff0000');
    } else if (this.isHover) {
      fill(127);
    } else {
      fill(191);
    }
    ellipse(this.ballPos.x, this.ballPos.y, 2 * this.rad);
    stroke(0);
    noFill();
    line(this.pos.x, this.pos.y, this.ballPos.x, this.ballPos.y);

    //

    noStroke();
    fill(127);
    ellipse(this.ballPos.x, this.ballPos.y, 20);
    if (this.isDragging2) {
      fill('#ff0000');
    } else if (this.isHover2) {
      fill(127);
    } else {
      fill(191);
    }
    ellipse(this.ballPos2.x, this.ballPos2.y, 2 * this.rad);
    stroke(0);
    noFill();
    line(this.ballPos.x, this.ballPos.y, this.ballPos2.x, this.ballPos2.y);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.angleAcc = 0;
      this.angleVel = 0;
      this.draggingOffset2.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      const ballShouldBe = createVector(
        mX - this.draggingOffset.x,
        mY - this.draggingOffset.y
      );
      const angle = atan2(
        ballShouldBe.y - this.pos.y,
        ballShouldBe.x - this.pos.x
      );
      this.angle = angle;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }

  //

  mouseMoved2(mX, mY) {
    this.isHover2 =
      (this.ballPos2.x - mX) ** 2 + (this.ballPos2.y - mY) ** 2 <=
      this.rad ** 2;
  }

  mousePressed2(mX, mY) {
    if (this.isHover2) {
      this.isDragging2 = true;
      this.angleAcc = 0;
      this.angleVel = 0;
      this.angleAcc2 = 0;
      this.angleVel2 = 0;
      this.draggingOffset2.set(mX - this.ballPos2.x, mY - this.ballPos2.y);
    }
  }

  mouseDragged2(mX, mY) {
    if (this.isDragging2) {
      const ballShouldBe2 = createVector(
        mX - this.draggingOffset2.x,
        mY - this.draggingOffset2.y
      );
      const angle2 = atan2(
        ballShouldBe2.y - this.ballPos.y,
        ballShouldBe2.x - this.ballPos.x
      );
      this.angle2 = angle2;
    }
  }

  mouseReleased2() {
    this.isDragging2 = false;
  }
}
