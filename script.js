
function setup() {
   createCanvas(windowWidth, windowHeight);
  background(245);

  noStroke(); 
}

function mouseMoved() {
  
  fill(mouseX, mouseY, mouseY);
  ellipse(mouseX, mouseY, 40, 40);
}

