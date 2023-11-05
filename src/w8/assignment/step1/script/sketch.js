let traffic; //traffic 정의
let infiniteOffset = 80; //화면 경계에서 나타날 위치의 오프셋

function setup() {
  //초기 설정 함수
  setCanvasContainer('canvas', 3, 2, true); //캔버스 생성
  colorMode(HSL, 360, 100, 100, 100); // 색상 모드 HSL로 설정
  background('white'); //배경 색깔 흰색으로 설정
  traffic = new Traffic(); //traffic 클래스 객체 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  } //초기에 무작위 위치에 물체 생성
}

function draw() {
  //그리기 함수
  background('white'); //배경 색깔 흰색으로 설정
  traffic.run(); //traffic 객체의 run 메서드 호출
}

function mouseDragged() {
  //마우스가 드래그 될 때 실행되는 함수
  traffic.addVehicle(mouseX, mouseY); //마우스 위치에 물체 생성
}
