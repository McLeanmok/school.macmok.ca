function setup() {
  createCanvas(750, 700);
}

function draw() {
  background(250);
  stroke(222, 110, 15) // just like with point(), we can't fill() it. We control it'its color via stroke().
  strokeWeight(2) // manipulating the weight. By default, line() produces a 1px element.
  line(250, 250, 450, 500); // producing the line(), syntax: line(x1, x, y1, y2)
  // 2nd line
  line(450, 250, 250, 500);
  
}