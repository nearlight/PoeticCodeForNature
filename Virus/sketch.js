//Mouse around the screen to spread the virus. 

  let viruses = [];

  function setup() {
    createCanvas(400, 400);
    background(255,0,0); 
    
    for (let i = 0; i < 200; i++) {
      viruses.push(new Virus(random(width), 400, random(-2, 1), -1, -5, 1));
      //반복문 안에 있는 i값은 바이러스의 확산령을 결정하는 듯 하고, random 2개는 첫번째 랜덤은 위치인듯한데, 두번째는 모르겠음
    }
  }

  function draw() {
  for (let v in viruses) {
   viruses[v].run(); 
  }
  }