function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke()
  console.log(millis())
  var t=millis()/1000
  var loopt;
  loopt=t%1
  let m=map(loopt,0,1,255,0)
  fill(255,0,0,m)
  ellipse(200,200,200) }