function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

  var x;

  x = 1;
  ellipse(x * 100, 100, 50, 50);

  x = 2;
  ellipse(x * 100, 100, 50, 50);

  x = 3;
  ellipse(x * 100, 100, 50, 50);
}
function draw(){
  background(128,0,64);
  var size=Math.abs(mouseX-320)
  ellipse(320,320,mouseX,mouseY);

  for (var x=1; x<=5; x++)
  {
    ellipse(x * 60,x*20+100,x * 50,x * 50);
  var size
  }
}
