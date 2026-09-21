// variables - mainly colors. Quick question, I learned that const variables cannot be reassigned, and the let keyword let'lets you reassign values to a variable. Coming from a CSS background, I'm used to having the ability to override a variable at any point. I have declared all my variables using let, is this good practice?
let primaryClr = ["197", "40", "61"];
let secondaryClr = ["233", "114", "76"];
let tertiaryClr = ["37", "25", "133"];
let canvasBg = ["255", "235", "194"];

function setup() {
  // this might be a bit overkill, but I'm going to store the canvas dimensions as variables. I love my variables!
  let canvasWidth = 900;
  let canvasHeight = 1800;
  createCanvas(canvasWidth, canvasHeight);
  background(canvasBg); // the documentation stuffs everything in setup(), that'I don't know if that's the best idea ever, but I'm going to set the background in here, just so that I can separate concerns. Setup is the gruntwork, and draw is the content. Feel free to dock marks if this is not sensible.
}

function draw() {
  // I'm going to store the record diameter as a variable, and I'm going to manipulate it as I form the main drawing
  let recordSize = 600;
  // some other variables 
  let recordBorderThickness = 8;
  let recordLabel = 132;
  let turntableAnchorSize = 60;
  // 1st circlem
  recordBorderThickness = 2;
  stroke(primaryClr);
  noFill();
  strokeWeight(recordBorderThickness);
  circle(500, 500, recordSize);

  //  second
  recordSize = 500;
  recordBorderThickness = 8;
  stroke(secondaryClr);
  strokeWeight(recordBorderThickness);
  circle(500, 500, recordSize);

  // third circle
  recordSize = 400;
  recordBorderThickness = 2;
  stroke(tertiaryClr);
  strokeWeight(recordBorderThickness);
  circle(500, 500, recordSize);

  // fourth circle
  recordSize = 300;
  recordBorderThickness = 8;
  stroke(primaryClr);
  strokeWeight(recordBorderThickness);
  noFill();
  circle(500, 500, recordSize);

  //  fifth circle
  recordSize = 200;
    recordBorderThickness = 2;

  stroke(secondaryClr);
  strokeWeight(recordBorderThickness);
  circle(500, 500, recordSize);

  // label - point 
  strokeWeight(recordLabel);
  stroke(tertiaryClr);
  point(500, 500);

  // turntable arm
  strokeWeight(3);
  // arm
  stroke(0);
  line(100, 100, 400, 350);

  // turntable anchor 
  strokeWeight(turntableAnchorSize);
  stroke(primaryClr);
  point(100, 100);

  // needle
  strokeWeight(turntableAnchorSize / 2);
  stroke(primaryClr)
  point(400, 350)
}
