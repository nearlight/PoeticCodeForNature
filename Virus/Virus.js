class Virus {

  constructor(x, y, xspeed, yspeed, spreadAmount, sw, e) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.spreadAmount = spreadAmount;
    this.sw = sw;
    this.col = 2;
    this.e = e;
    //당연히 x,y는 위치이며 그에 따른 speed 2개는 속도를 나타내는듯 보이며, 그 이외에는 아래에서 값을 바꾸어보면서 파악을 해야겠음 spreadAmount는 확산과 관련된것 처럼 보이는데, sw는 뭔지 모르겠고.. col은 가장 최초로 확산되는 바이러스 개체들의 color값을 나타내는듯 함점점 그 위에 덧씌워지는 color값이 증가하며 점차 흰색으로 바뀌어감

  }

  run() {
    this.render();
    this.move();
    this.spread();
    this.restart();
    //render는 출력을 하는데 필요해서 지정한거같고, move, spread는 당연히 움직임과 확산에 대한것인듯, restart는 한번 바이러스가 캔버스 끝까지 확산이 완료된뒤에 다시 그 위에 바이러스가 확산이 시작될때 무엇인가를 담당하는 듯 보임
  }

  render() {
    stroke(this.col);
    // stroke안에 점점 밝아지는 color값이 변화하는듯함 sroke안에 숫자를 고정값으로 할 경우 점점 밝아지지 않고, 계속 그 해당 숫자만큼의 값만큼 확산이 반복됨

    strokeWeight(this.sw);
    //여기서 sw의 정체를 파악완료 strokeWeight였으며, 역시나 이 값은 새로 갱신되는것은 아닌듯함 아무튼 값을 올리면 당연히 바이러스 개체의 선이 굵어지는듯

    point(this.x, this.y, this.e);
    //생성되는 위치? 인듯
  }

  move() {

    this.xspeed = (random(-2, 2));
    //단순한 확산속도나 움직임이라고 생각될수도 있는데, 이 값들을 변경해보면서 파악하면서 알 수 있었음. 랜덤안에 들어가있는 범위만큼 바이러스가 y축으로 일정하게 올라가면서 좌우 지그재그로 퍼지는 정도를 담당하는듯 보임, 값을 과도하게 늘리거나 줄이면 확산되는 범위도 일정 부근에서 멈추게 될 뿐만 아니라, 방향성도 일정하게 변화하여 바이러스가 불규칙하게 확산되는 느낌이 줄어들기 때문에 값은 -2,2로 고정하는게 좋을듯

    this.yspeed = random(0.1, -0.9);
    //말 그대로 y방향으로 올라가는, 확산되는 speed 인데, 최소속도, 최대속도인걸로 보이는데, 두 값의 차이가 크면 클수록 확산속도가 불규칙성을 띄며 적당한 속도값은 지정된 -0.1또는 0.1, -0.9로 고정해야할듯 함 또한 두번째 최대속도의 +값은 먹지 않는듯

    this.e = color(0);

    this.y += this.yspeed;
    this.x += this.xspeed;
  }

  restart() {
    if (this.y < 0) {
      this.y = height;
      this.col += 11;
      this.e += 11;
    }
  }

  spread() {
    if (dist(mouseX, mouseY, this.x, this.y) < 100) {
      this.y += this.spreadAmount;
      //마우스 커서 위치에 따라서 그 부분은 확산이 피해지면서, 속도는 매우 급격히 빨리지는듯 보임
    }
  }
}
