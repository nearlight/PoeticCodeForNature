function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  //background with transparancy
  background(0,0,90,20);

  //blinking stars
  var galaxy = {
  locationX : random(width),
  locationY : random(height),
  size : random(1,10)
}
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);


}

function mousePressed () {
}
