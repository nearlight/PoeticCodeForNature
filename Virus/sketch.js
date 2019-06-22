//Mouse around the screen to spread the virus.

let viruses = [];

function setup() {

  createCanvas(400, 400);
  background(255, 0, 0);

  for (let i = 0; i < 200; i++) {
    viruses.push(new Virus(random(width), 400, random(-2, 1), -1, -5, 1));
    //반복문 안에 있는 i값은 바이러스의 확산령을 결정하는 듯 하고, random 2개는 첫번째 랜덤은 위치인듯한데, 두번째는 모르겠음
  }
}

function draw() {
  if (mouseIsPressed){
    fill(220,0,0);
  ellipse(50, 50, 50, 50);
  ellipse(50, 50, 25, 25);

  ellipse(100, 100, 50, 50);
  ellipse(100, 100, 25, 25);

  ellipse(250, 250, 50, 50);
  ellipse(250, 250, 25, 25);

  ellipse(150, 300, 50, 50);
  ellipse(150, 300, 25, 25);

  ellipse(350, 300, 50, 50);
  ellipse(350, 300, 25, 25);

  ellipse(200, 150, 50, 50);
  ellipse(200, 150, 25, 25);

  ellipse(300, 50, 50, 50);
  ellipse(300, 50, 25, 25);

  ellipse(50, 200, 50, 50);
  ellipse(50, 200, 25, 25);

  ellipse(40, 300, 50, 50);
  ellipse(40, 300, 25, 25);

  ellipse(350, 150, 50, 50);
  ellipse(350, 150, 25, 25);
  }

  else {
  fill(0);
  }
  //혈구들을 생성하기 위한 수많은 ellipse와 작은 같은 크기, 동일 위치의 ellipse들, 그리고 mouseIsPressed는 누를때마다 새롭게 갱신되며 깨끗해지나, 다시 검은색에 잠식됨

  for (let v in viruses) {
    viruses[v].run();


  }
}
