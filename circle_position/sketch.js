xValue = [10, 100, 140, 200, 260, 320]
function setup() { 
  createCanvas(600, 300); 
}

function draw() {
  background(200);
  for(x of xValue){
    circle(x, 140, 80)
  }
}