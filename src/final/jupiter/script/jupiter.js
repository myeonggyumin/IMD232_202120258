//const COLORS = [
//  { r: 250, g: 255, b: 89 },
//  { r: 250, g: 255, b: 50 },
//];
//
//class App {
//  constructor() {
//    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
//
//    this.totalParticles = 15;
//    this.particles = [];
//    this.maxRadius = 90;
//    this.minRadius = 40;
//
//    // window.addEventListener('resize', this.resize.bind(this), false);
//    // this.resize();
//
//    window.requestAnimationFrame(this.animate.bind(this));
//  }
//
//  // resize() {
//  //   this.stageWidth = document.body.clientWidth;
//  //   this.stageHeight = document.body.clientHeight;
//  //
//  //   this.canvas.width = this.stageWidth * this.pixelRatio;
//  //   this.canvas.height = this.stageHeight * this.pixelRatio;
//  //   this.ctx.scale(this.pixelRatio, this.pixelRatio);
//  //
//  //   this.createParticles();
//  // }
//
//  createParticles() {
//    let curColor = 0;
//    this.particles = [];
//
//    for (let i = 0; i < this.totalParticles; i++) {
//      const item = new GlowParticles(
//        Math.random() * this.stageWidth,
//        Math.random() * this.stageHeight,
//        Math.random() * (this.maxRadius = this.minRadius) + this.minRadius,
//        COLORS[curColor]
//      );
//
//      if (++curColor >= COLORS.length) {
//        curColor = 0;
//      }
//
//      this.particles[i] = item;
//    }
//  }
//
//  animate() {
//    window.requestAnimationFrame(this.animate.bind(this));
//
//    //this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
//    for (let i = 0; i < this.totalParticles; i++) {
//      const item = this.particles[i];
//      item.animate(this.ctx, this.stageWidth, this.stageHeight);
//    }
//  }
//}

let debug = true;
let flowfield;
let vehicles = [];
let vehicles2 = [];
let lastChangeTime = 0;
let app;
let img;

function preload() {
  img = loadImage('1.png');
}

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  flowfield = new FlowField(20, 0.1);
  for (let i = 0; i < 60; i++) {
    vehicles2.push(
      new Vehicle2(
        random(width),
        random(height),
        1,
        4,
        random(2, 5),
        random(0.1, 0.5)
      )
    );
  }

  for (let i = 0; i < 7000; i++) {
    vehicles.push(
      new Vehicle(
        random(width),
        random(height),
        1,
        4,
        random(2, 5),
        random(0.1, 0.5)
      )
    );
  }
}

function draw() {
  background('#E3BA94');

  vehicles2.forEach((each) => {
    each.follow(flowfield);
    each.update();
    each.borderInfinite();
    each.display();
  });

  vehicles.forEach((each) => {
    each.follow(flowfield);
    each.update();
    each.borderInfinite();
    each.display();
  });

  if (millis() - lastChangeTime > 3000) {
    flowfield.init();
    lastChangeTime = millis();
  }
}

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}

function mousePressed() {
  flowfield.init();
}
