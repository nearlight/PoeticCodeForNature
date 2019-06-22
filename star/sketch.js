let ball;
let t = 0.01;

function setup() {
  r = random(255);
  g = random(255);
  b = random(255);
  //색의 변화를 주기위한 r,g,b
  createCanvas(windowWidth, windowHeight);
  strokeWeight(50);

  noCursor();
  //캔버스의 크기 제한을 두지 않기 위해서 각각 windowWidth와 height를 사용한듯 보이고, 마우스 커서도 캔버스 내에서 움직일수있도록 개체로 넣었으며 그 커서가 보이지 않도록 noCursor를 사용한듯
}

function draw() {

  //background with transparancy
  background(0,0,30,10);
  fill(r,g,b);
  noStroke();
  //당연히, 앞 3자리는 rgb로 배경색을 결정하는듯 보이지만, 그 뒤에 숫자는 원본 주석문에서는 투명도라고 되어있는듯 하나, 값을 올려보니, 별 오브젝트가 생성 및 소멸되는 속도가 증가함

  //blinking stars
  var galaxy = {
  locationX : random(width),
  locationY : random(height),
    col : random(250,250,130),
    //각각 별이 반짝이는, 즉 생성 및 소멸되는 위치가 랜덤이 되도록 위치를 지정해놓음

  size : random(1,6)
    //반짝이는 별의 랜덤 크기

}
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size, galaxy.col);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size,galaxy.col);

//위의 ellipse는 마우스커서의 위치에 따라서 움직이는 ellipse인듯 보이고, 아래의 ellipse는 그 이외의 모든 canvas안에서 생성 및 소멸되는 존재로 보임
}

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
  //클릭을 할때마다, r,g,b각각의 괄호안에 들어간 랜덤값 만큼 랜덤으로 색이 변화
