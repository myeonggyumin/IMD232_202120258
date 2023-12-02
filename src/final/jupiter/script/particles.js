const PI2 = Math.PI * 2;

class GlowParticles {
  constructor(x, y, rad, rgb) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.rgb = rgb;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;

    this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.01;

    this.rad += Math.sin(this, this.sinValue);
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.rad + 0.01,
      this.x,
      this.y,
      this.rad
    );
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.rad, 0, PI2, false);
    ctx.fill('white');
  }
}
