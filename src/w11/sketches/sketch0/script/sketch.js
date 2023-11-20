let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //createCanvas(800, 300);
  cam = createCapture(VIDEO);
  //cam.size(160, 240);
  cam.hide();
  console.log(cam.pixels);
  //noLoop();
}

function draw() {
  background('white');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = width * y + x;
      const color = pixels[idx];
      const b = brightness(color);
    }
  }
  updatePixels();
}
