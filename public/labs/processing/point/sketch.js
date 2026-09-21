function setup() {
  createCanvas(600, 640);
}

  function draw() {
  background(220);
    // storing the base unit in a variable 
    const baseUnit = 16;
  // first point 
  strokeWeight(baseUnit); // required attribute to set the size. The function works in pixels 
  stroke(255, 77, 81); // used to set the colour since points can't be filled. It accepts RGB values
  point(50, 50); // plotting the point on the canvas 

  // Second point
  strokeWeight(baseUnit * 2);
  point(100, 100);

  // 3rd 
  strokeWeight(baseUnit * 3);
  point(150, 150);

  // 4th 
  strokeWeight(baseUnit * 4);
    point(200, 225);

    // 5th 
    strokeWeight(baseUnit * 5);
    point(240, 320);;

    // 6th 
    strokeWeight(baseUnit * 6);
    point(240, 450)

}