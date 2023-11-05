class Traffic {
  //Traffic 클래스 정의
  constructor() {
    //생성자 함수
    this.vehicles = []; //vehiclesa 배열 초기화
  }

  run() {
    //run 정의
    this.vehicles.forEach((eachVehicle) => {
      //각 물체마다 수행
      const separate = eachVehicle.separate(this.vehicles); //separate를 정의
      separate.mult(1); // 분리 힘을 가중치를 곱해 적용
      eachVehicle.applyForce(separate); //물건에 분리 힘을 적용
      const align = eachVehicle.align(this.vehicles); // align을 정의
      align.mult(0.5); //정렬 힘을 가중치를 곱해 적용
      eachVehicle.applyForce(align); //차량에 정렬 힘을 적용
      const cohesion = eachVehicle.cohesion(this.vehicles); //cohesion을 정의
      cohesion.mult(0.5); //응집 힘을 가중치를 곱해 적용
      eachVehicle.applyForce(cohesion); //물체에 응집 힘을 적용
      eachVehicle.update(); //물체 위치 및 속도 업데이트
      eachVehicle.borderInfinite(); //화면 경계 처리
      eachVehicle.display(); // 물체 시각화
    });
  }

  addVehicle(x, y) {
    //addVehicle 정의
    // const mass = floor(random(1, 3));
    const mass = 1; //질량을 1로 설정
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    ); //새 차량을 추가
  }
}
