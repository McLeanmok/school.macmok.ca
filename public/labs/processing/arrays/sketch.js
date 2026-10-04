// array
const polyPoints = [
  [100, 200],
  [200, 180],
  [350, 190],
  [250, 250],
  [205, 450],
  [200, 350],
];
// colours 
let primaryClr = [167, 201, 87];
let secondaryClr = [188, 71, 73];

// setup
function setup() {
  createCanvas(670, 800);
  background(250);
}

function draw() {
  strokeWeight(20);
  // a polygon with si
  // x sides
  noStroke();
  fill(primaryClr);
  beginShape();
  for (const [x, y] of polyPoints) {
    vertex(x, y);
  }
  endShape(CLOSE);

  // 2/3 - segmented circle with noise
stroke(0);
strokeWeight(4);
noFill();

// system variable 
const segmentCount = 24;
const segmentGap = 0.18;
const segmentAngle = TWO_PI / segmentCount;
const xPos = width * 0.8;
const yPos = height * 0.8;
const rad = 110;
const noiseScale = 0.01;

// outer loop
for (let i = 0; i < segmentCount; i++) {
  const start = i * segmentAngle + segmentGap / 2;
  const end = (i + 1) * segmentAngle - segmentGap / 2;

  // changing the colour of each other segment 
  if (i % 2 === 0) {
    stroke(primaryClr);
  } else {
    stroke(secondaryClr);
  }

  // forming the circle 
  beginShape();
  for (let t = start; t <= end; t += 0.01) {
    const x = cos(t) * rad;
    const y = sin(t) * rad;
    const offset = map(noise(x * noiseScale, y * noiseScale), 0, 1, -20, 20);
    const radius = rad + offset;

    vertex(xPos + cos(t) * radius, yPos + sin(t) * radius);
    
  }
  endShape();
}

fill(secondaryClr);
triangle(300, 300, 500, 400, 250, 450);
}
