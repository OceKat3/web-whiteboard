function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120)
  background(0)
}

function draw() {
  if(mouseIsPressed){
    stroke(255)
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY)
    print('sdfsdf')
  }
}