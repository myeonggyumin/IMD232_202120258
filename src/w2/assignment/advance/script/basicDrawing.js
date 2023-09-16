function setup() {
  setCanvasContainer('p5-canvas', 300, 200, true);
  background('white');
}

function draw() {
  background(255);

  // 루프 설정 중복 방지
  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  //바닥
  fill('#ffdad6');
  rect(0, 0, width, height);
  stroke('#630c32');
  fill('#ffdad6');
  rect(0, height / -28, width, height);
  fill('#ffdad6');
  rect(0, height / -11.4, width, height);
  fill('#ffdad6');
  rect(0, height / -7, width, height);
  fill('#ffdad6');
  rect(0, height / -5, width, height);
  fill('#ffdad6');
  rect(0, height / -4, width, height);

  //벽
  stroke('#630c32');
  fill('#ffb3ab');
  rect(0, height / -4, width, height);
  fill('#24bdff');
  rect(0, height / -4, width, height - 10);

  fill('#ffffff');
  rect(width / 1.3, height / 15, width / 3, height / 6);
  fill('#ed79e5');
  rect(width / 1.28, height / 12, width / 3, height / 8);
  noStroke();
  fill('#ffc654');
  ellipse(width / 1.17, height / 7, width / 20, height / 13);
  fill(0, 255, 255, 150);
  ellipse(width / 1.14, height / 8, width / 40, height / 25);
  fill('#ff3dbb');
  ellipse(width / 1.002, height / 6.6, width / 18, height / 12);

  //창문
  stroke('#630c32');
  fill('#ffffff');
  rect(width / 10, height / 8, width / 3, height / 2);
  fill('#2255b3');
  rect(width / 9, height / 7, width / 3.22, height / 2.15);

  //야경
  stroke('#ffefbf');
  strokeWeight(5);
  point(width / 8.7, height / 3);
  point(width / 8, height / 3);
  point(width / 7, height / 3);
  point(width / 6.5, height / 3);
  point(width / 5, height / 3);
  point(width / 5.5, height / 3);
  point(width / 4, height / 3);
  point(width / 4.2, height / 3);
  point(width / 3.2, height / 3);
  point(width / 3, height / 3);
  point(width / 2.5, height / 3);
  //
  point(width / 8.7, height / 2.8);
  point(width / 8, height / 2.8);
  point(width / 7, height / 2.8);
  point(width / 6.5, height / 2.8);
  point(width / 5, height / 2.8);
  point(width / 5.5, height / 2.8);
  point(width / 4, height / 2.8);
  point(width / 4.9, height / 2.8);
  point(width / 3.7, height / 2.8);
  point(width / 3, height / 2.8);
  point(width / 2.5, height / 2.8);
  //
  point(width / 8.7, height / 2.6);
  point(width / 8, height / 2.6);
  point(width / 7, height / 2.6);
  point(width / 6.9, height / 2.6);
  point(width / 5, height / 2.6);
  point(width / 5.5, height / 2.6);
  point(width / 4.5, height / 2.6);
  point(width / 4.2, height / 2.6);
  point(width / 3.5, height / 2.6);
  point(width / 3, height / 2.6);
  point(width / 2.5, height / 2.6);
  //
  point(width / 8.3, height / 2.4);
  point(width / 8, height / 2.4);
  point(width / 7, height / 2.4);
  point(width / 6.5, height / 2.4);
  point(width / 5, height / 2.4);
  point(width / 5.5, height / 2.4);
  point(width / 4, height / 2.4);
  point(width / 3.5, height / 2.4);
  point(width / 3.2, height / 2.4);
  point(width / 2.7, height / 2.4);
  point(width / 2.5, height / 2.4);
  //
  point(width / 8.7, height / 2.2);
  point(width / 8, height / 2.2);
  point(width / 7, height / 2.2);
  point(width / 6.5, height / 2.2);
  point(width / 5, height / 2.2);
  point(width / 5.5, height / 2.2);
  point(width / 4, height / 2.2);
  point(width / 4.2, height / 2.2);
  point(width / 3.2, height / 2.2);
  point(width / 3, height / 2.2);
  point(width / 2.5, height / 2.2);
  //
  point(width / 8.7, height / 2.05);
  point(width / 8, height / 2.05);
  point(width / 7, height / 2.05);
  point(width / 6.5, height / 2.05);
  point(width / 5, height / 2.05);
  point(width / 5.5, height / 2.05);
  point(width / 4, height / 2.05);
  point(width / 4.2, height / 2.05);
  point(width / 3.2, height / 2.05);
  point(width / 3, height / 2.05);
  point(width / 2.5, height / 2.05);
  //
  point(width / 8.7, height / 1.9);
  point(width / 8, height / 1.9);
  point(width / 7, height / 1.9);
  point(width / 6.5, height / 1.9);
  point(width / 5, height / 1.9);
  point(width / 5.5, height / 1.9);
  point(width / 4, height / 1.9);
  point(width / 4.2, height / 1.9);
  point(width / 3.2, height / 1.9);
  point(width / 3, height / 1.9);
  point(width / 2.5, height / 1.9);
  //
  point(width / 8.7, height / 1.8);
  point(width / 8, height / 1.8);
  point(width / 7, height / 1.8);
  point(width / 6.5, height / 1.8);
  point(width / 6, height / 1.8);
  point(width / 5.5, height / 1.8);
  point(width / 5, height / 1.8);
  point(width / 5.2, height / 1.8);
  point(width / 3.2, height / 1.8);
  point(width / 3, height / 1.8);
  point(width / 2.5, height / 1.8);
  //
  point(width / 8.7, height / 1.7);
  point(width / 8, height / 1.7);
  point(width / 7, height / 1.7);
  point(width / 6.5, height / 1.7);
  point(width / 5, height / 1.7);
  point(width / 4.5, height / 1.7);
  point(width / 4, height / 1.7);
  point(width / 4.2, height / 1.7);
  point(width / 3.2, height / 1.7);
  point(width / 2.9, height / 1.7);
  point(width / 2.8, height / 1.7);
  point(width / 2.5, height / 1.7);

  //커튼

  noStroke();
  fill(255, 255, 255, 150);
  rect(width / 11, height / 5.5, width / 9, height / 3);

  fill('#000000');
  rect(width / 11, height / 6, width / 2.8, height / 40);

  //테이블
  stroke('#630c32');
  strokeWeight(1);

  fill('#997f8b');
  rect(width / 1.75, height / 1.5, width / 35, height / 4);

  fill('#997f8b');
  rect(width / 1.185, height / 1.5, width / 35, height / 4);

  fill('#ffffff');
  rect(width / 1.8, height / 1.6, width / 3, height / 20, 10);

  //의자

  fill('#ad929e');
  rect(width / 2.35, height / 1.23, width / 35, height / 7);

  fill('#ad929e');
  rect(width / 1.8, height / 1.23, width / 35, height / 7);

  fill('#ffcf57');
  rect(width / 2.4, height / 1.3, width / 5.7, height / 20, 10);

  fill('#ad929e');
  rect(width / 1.1, height / 1.23, width / 35, height / 7);

  fill('#ad929e');
  rect(width / 1.29, height / 1.23, width / 35, height / 7);

  fill('#ffcf57');
  rect(width / 1.3, height / 1.3, width / 5.7, height / 20, 10);

  //조명
  noStroke();
  fill(255, 239, 176, 100);
  ellipse(width / 1.385, height / 2.3, width / 10, height / 6.5);
  fill(255, 239, 176, 140);
  ellipse(width / 1.385, height / 2.3, width / 12, height / 8);
  fill(255, 239, 176, 191);
  ellipse(width / 1.385, height / 2.3, width / 15, height / 10);
  fill(255, 239, 176, 255);
  ellipse(width / 1.385, height / 2.3, width / 20, height / 13);

  fill('#ffffff');
  stroke('#630c32');
  strokeWeight(1);
  rect(width / 1.4, 0, width / 70, height / 3);
  rect(width / 1.54, height / 3, width / 7, height / 10);

  //정물
  fill('#ffffff');
  rect(width / 1.7, height / 1.85, width / 25, height / 12);
  fill('#ff9c59');
  noStroke();
  rect(width / 1.68, height / 1.8, width / 38, height / 16);
  stroke('#630c32');
  fill('#ffffff');
  rect(width / 1.2, height / 1.85, width / 25, height / 12);
  fill('#ff9c59');
  noStroke();
  rect(width / 1.19, height / 1.71, width / 38, height / 30);

  stroke('#630c32');
  fill('#ff781f');
  rect(width / 1.43, height / 1.85, width / 10, height / 12, 0, 0, 40, 40);

  //식물

  noStroke();
  fill('#30807c');
  ellipse(width / 9, height / 1.45, width / 20, height / 10);
  fill('#30807c');
  ellipse(width / 14, height / 1.35, width / 20, height / 10);
  fill('#30807c');
  ellipse(width / 9, height / 1.3, width / 20, height / 10);
  fill('#30807c');
  ellipse(width / 7, height / 1.34, width / 20, height / 10);

  fill(0, 0, 0, 100);
  rect(width / 16, height / 1.4, width / 20, height / 3, 40, 40, 0, 0);

  stroke('#630c32');
  fill('#ffffff');
  rect(width / 50, height / 1.3, width / 6, height / 3);

  noStroke();
  fill(0, 0, 0, 100);
  rect(width / 25, height / 1.29, width / 10, height / 3);
  fill(0, 0, 0, 50);
  rect(width / 18, height / 1.29, width / 15, height / 3);
}
