let pageClr = [253, 240, 213];
let boardClr = [0, 43, 73];
let oppositionRockClr = [120, 0, 0];
let homeTeamRock = [255, 186, 8];
let buzzerClr = [193, 18, 31];
// sizes
let cx, cy, houseDiam;

// setup
function setup() {
  createCanvas(650, 600);

  // defining
  cx = width / 2;
  cy = height / 2;
  houseDiam = 300;

  background(pageClr);
  noLoop();
}

function draw() {
  // edges of the sheet
  let boardW = 50;
  noStroke();
  for (let i = 0; i < 2; i++) {
    let x = i * (width - boardW);
    fill(boardClr);
    rect(x, 0, boardW, height);
  }

  // outer ring
  noFill();
  stroke(boardClr);
  strokeWeight(40);
  circle(cx, cy, houseDiam);

  // buzzer
  noStroke();
  fill(buzzerClr);
  circle(cx, cy, houseDiam * 0.25);

  // rock placement - randomly places rocks on each page reload
  let rocDiameter = 60;
  let numRocks = 4;
  noStroke();
  for (let i = 0; i < numRocks; i++) {
    // variables
    let angle = random(TWO_PI);
    let distance = sqrt(random()) * (houseDiam / 2 + 20 - rocDiameter / 2);
    let x = cx + cos(angle) * distance;
    let y = cy + sin(angle) * distance;

    // drawing and filling rocks
    fill(i % 2 === 0 ? oppositionRockClr : homeTeamRock);
    circle(x, y, rocDiameter);
  }
  // loop
}
