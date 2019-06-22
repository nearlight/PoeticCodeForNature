function mousePressed() {
  background(255);
}
class Particle {

  constructor(x, y, r) {
    this.pos = createVector(x, y);
    //생성위치

    this.vel = createVector(random(-5, 5), random(-5, 5));
    //폭발 방향, 첫번째 랜덤 범위가 x축 폭발 방향, 두번째가 y축



    this.acc = createVector(1, 1);
    //각각의 값이 x,y축의 방향과 속도가 증가함

    this.r = r ? r : 48;
    //뭔지..모르겠...ㅠ

    this.halfr = r / 2;
    //이것도 값을 바꾸어도 변화하는것이 없음 constructor 내부에 x,y다음으로 존재하는 r이라는 값에 어떤작용을 주기위한 존재인것 같긴하지만 이것을 정확히 파악하지는 못하겠음
  }

  applyForce(force) {
    this.acc.add(force);
    //물리 적용을 위해서 추가한것으로 보이지만, 제거해도 큰 변화가 없음
  }

  update() {
    this.vel.add(this.acc);
    //위와 마찬가지

    this.pos.add(this.vel);
    //전반적인 확산의 힘

    this.acc.set(0, 0);
    
    
    //각각 x,y축으로 확산되는 속도 및 확산도 값이 커질수록 가속도는 빨라지며, 방향은 좁아짐
  }

  display() {
    noStroke();
    fill(255,255,100);

    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    //x축 생성위치, y축 생성위치, x축 ellipse크기, y축 ellipse크기

  }

  edges() {
    if (this.pos.y > (height - this.halfr)) {
      this.vel.y *= -1;
      this.pos.y = (height - this.halfr);
    }

    if (this.pos.y < 0 + this.halfr) {
      this.vel.y *= -1;
      this.pos.y = 0 + this.halfr;
    }

    if (this.pos.x > (width - this.halfr)) {
      this.vel.x *= -1;
      this.pos.x = (width - this.halfr);
    }

    if (this.pos.x < this.halfr) {
      this.vel.x /= -1;
      this.pos.x = this.halfr;

      //constructor값과 이름을 넣어서 조건문을 통해 어떤 제한을 둔것같은데 변화시킬수 있는건 없는듯 함..
    }
  }
}


let particles = [];

let w = window.innerWidth,
  h = window.innerHeight,
  d = 50;

function setup() {
  createCanvas(w, h);
  //particles[0] = new Particle(0 , 0, d);
}

function draw() {

  background(0, 5, 20);

  var gravity = createVector(0, 0.05);
  var wind = createVector(0.09, 0);
  //중력과 바람인것 같지만 ellipse에는 별 영향을 주지 못하는듯 보임

  if (particles.length > 0) {
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].display();
    }
  }

}

var i = 0;
setInterval(function mousePressed() {
  if (i <= 999999999999999999999999999999999) {
    //i의 생성갯수

    particles[i] = new Particle(width / 2, height / 2, random(1, 8));
    i++
    //폭발로 부터 생성되는 ellipse의 랜덤 크기들
  }
}, 0);
//값을 높일수록 ellipse의 갯수가 줄어듬