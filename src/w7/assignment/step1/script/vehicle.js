class Vehicle {
  //vehicle 클래스 정의
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 생성자 함수: 물체의 초기 상태를 설정
    this.pos = createVector(x, y); // 물체의 위치 (2D 벡터)
    this.vel = p5.Vector.random2D(); // 물체의 초기 속도 (랜덤 방향)
    this.acc = createVector(); // 물체의 초기 가속도
    this.mass = mass; // 물체의 질량
    this.rad = rad; // 물체의 반지름
    this.speedMx = speedMx; // 최대 속도
    this.forceMx = forceMx; // 최대 힘
    this.neighborhooodRad = 50; // 이웃 물체 감지 반경
    this.color = color; // 물체의 색상
  }

  cohesion(others) {
    // cohesion() 메서드 정의
    let cnt = 0; // 주변 물체 수를 추적
    const steer = createVector(0, 0); // 방향 벡터 초기화
    others.forEach((each) => {
      //반복 수행한다
      if (each !== this) {
        // 자신 제외한 각 물체에 대해
        const distSq = //distSq 정의
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //자신의 위치 벡터와 각 물체들의 위치 벡터를 빼고 제곱
        if (distSq < this.neighborhooodRad ** 2) {
          // 이웃 물체 감지 반경 내인 경우
          steer.add(each.pos); // 방향 벡터에 이웃 물체의 위치를 추가
          cnt++; // 이웃 물체 수 증가
        }
      }
    });
    if (cnt > 0) {
      //만약 cnt가 0보다 크면
      steer.div(cnt); // 방향 벡터를 이웃 물체 수로 나누어 평균화
      steer.sub(this.pos); // 현재 위치에서 방향 벡터를 뺌
      steer.setMag(this.speedMx); // 방향 벡터를 최대 속도로 조절
      steer.sub(this.vel); // 현재 속도에서 방향 벡터를 뺌
      steer.limit(this.forceMx); // 힘의 최대값으로 제한
    }
    return steer; // 계산된 방향 벡터 반환
  }

  align(others) {
    //align 정의
    let cnt = 0; //cnt를 0으로 설정
    const steer = createVector(0, 0); // 방향 벡터 초기화
    others.forEach((each) => {
      // 반복 수행한다
      if (each !== this) {
        //자신을 제외한 각 물체에 대해
        const distSq = //distSq 정의
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //자신의 위치 벡터와 각 물체들의 위치 벡터를 빼고 제곱
        if (distSq < this.neighborhooodRad ** 2) {
          // 이웃 물체 감지 반경 내인 경우
          steer.add(each.vel); // 방향 벡터에 이웃 물체의 위치를 추가
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; //이웃 물체 수 증가
        }
      }
    });
    if (cnt > 0) {
      //만약 cnt가 0보다 크면
      steer.div(cnt); // 방향 벡터를 이웃 물체 수로 나누어 평균화
      steer.setMag(this.speedMx); // 방향 벡터를 최대 속도로 조절
      steer.sub(this.vel); // 현재 속도에서 방향 벡터를 뺌
      steer.limit(this.forceMx); // 힘의 최대값으로 제한
    }
    return steer; // 계산된 방향 벡터 반환
  }

  separate(others) {
    //separate 정의
    let cnt = 0; //cnt를 0으로 설정
    const steer = createVector(0, 0); // 방향 벡터 초기화
    others.forEach((each) => {
      // 반복 수행한다
      if (each !== this) {
        //자신을 제외한 각 물체에 대해
        const dist = this.pos.dist(each.pos); //dist의 위치 벡터를 each의 위치 벡터로 지정
        if (dist > 0 && this.rad + each.rad > dist) {
          //dist가 0보다 크거나, 물체의 반지름+각 물체의 반지름이 dist보다 크면
          const distNormal = dist / (this.rad + each.rad); //distNormal를 dist에 반지름들의 합을 나눈 값으로 지정
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); //towardMeVec를 자신의 위치 벡터와 각 물체의 위치 벡터를 뺀 값으로 지정
          towardMeVec.setMag(1 / distNormal); //towardMeVec의 크기를 distNormal를 1로 나눈 값으로 제한
          steer.add(towardMeVec); //towardMeVec 벡터를 steer를 더함
          cnt++; //이웃 물체 추가
        }
      }
    });
    if (cnt > 0) {
      //cnt가 0보다 크면
      steer.div(cnt); // 방향 벡터를 이웃 물체 수로 나누어 평균화
      steer.setMag(this.speedMx); // 방향 벡터를 최대 속도로 조절
      steer.sub(this.vel); // 현재 속도에서 방향 벡터를 뺌
      steer.limit(this.forceMx); // 힘의 최대값으로 제한
    }
    return steer; // 계산된 방향 벡터 반환
  }

  applyForce(force) {
    //applyForce 정의
    const forceDivedByMass = p5.Vector.div(force, this.mass); // 주어진 힘을 질량으로 나눔
    this.acc.add(forceDivedByMass); // 가속도에 추가
  }

  update() {
    //update 정의
    this.vel.add(this.acc); //가속도에 속도를 더함
    this.vel.limit(this.speedMx); //최대 속도 제한
    this.pos.add(this.vel); //위치에 속도를 더함
    this.acc.mult(0); //가속도 초기화
  }

  borderInfinite() {
    //borderInfinite 정의
    if (this.pos.x < -infiniteOffset) {
      //만약 x위치가 화면 밖으로 나가면
      this.pos.x = width + infiniteOffset; //반대쪽 x위치로 이동하기
    } else if (this.pos.x > width + infiniteOffset) {
      //만약 x위치가 화면 밖으로 나가면
      this.pos.x = -infiniteOffset; //반대쪽 x위치로 이동하기
    }
    if (this.pos.y < -infiniteOffset) {
      //만약 y위치가 화면 밖으로 나가면
      this.pos.y = height + infiniteOffset; //반대쪽 y위치로 이동하기
    } else if (this.pos.y > height + infiniteOffset) {
      //만약 y위치가 화면 밖으로 나가면
      this.pos.y = -infiniteOffset; //반대쪽 y위치로 이동하기
    }
  }

  display() {
    //display 정의
    push(); //현재의 드로잉 스타일 설정과 변형을 저장
    translate(this.pos.x, this.pos.y); //위치 변형 함수
    rotate(this.vel.heading()); //물체의 방향에 따라 회전
    noStroke(); //선 없음
    fill(this.color); //this.color로 색 채우기
    beginShape(); //모양 그리기 시작
    vertex(this.rad, 0); //화살표 뾰족한 부분 꼭짓점 생성
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); //화살표 날개 꼭짓점 생성
    vertex(0, 0); //화살표 중앙 꼭짓점 생성
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); //화살표 날개 꼭짓점 생성
    endShape(CLOSE); //모양 그리기 끝
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); //설정들을 복구
  }
}
