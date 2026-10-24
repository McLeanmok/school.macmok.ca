
/*
Key Commands
a = closure 
b = continuity
c = proximity 
*/
// storing the default state
let currentMode = "a";

function setup() {
  background(220);
  createCanvas(800, 800);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);

  // establishing a global fontSize
  textSize(32);
}

function draw() {
  // variables
  let xPos = 200;
  let yPos = 200;
  let base = map(mouseX, 0, width, 0, 360);

  // variable container for textContent
  let TextContent;
  // logic that switches the image based on keyboard interactions 
  if (currentMode == "a") {
    TextContent = "closure";
    foreBack(xPos, yPos, 360, base);
  } else if (currentMode == "b") {
    TextContent = "continuity";
    cont(xPos, yPos, 300, base, 30);
  } else if (currentMode == "c") {
    TextContent = "proximity";
    prox(xPos, yPos, 300, base);
  }

  // text
  fill(0);
  text(
    ["The " + TextContent + " Gestault principle"],
    width / 2.5,
    height / 1.6,
  );
}

// extra bit of logic for keyboard interactivity 
function keyPressed() {
  const pressed = key.toLowerCase();
  if (pressed == "a" || pressed == "b" || pressed == "c") {
    currentMode = pressed;
  }
}
// functions

// 1 -- Foreground vs background
function foreBack(x, y, d, h) {
  noStroke();
  fill(h, 80, 100);
  rect(x, y, d, d);
  fill((h + 180) % 360, 80, 100);
  circle(x, y, d * 0.75);
}

// 2 -- continuity
function cont(xPos, yPos, diam, base, bits) {
  fill(base, 80, 100);
  circle(xPos, yPos, diam);
  fill((base + 180) % 360, 50, 100);
  for (let t = 0.0; t < TWO_PI * 0.75; t += TWO_PI / bits) {
    let x = xPos + (cos(t) * diam) / 2;
    let y = yPos + (sin(t) * diam) / 2;
    circle(x, y, 30);
  }
}

// 3 -- proximity
function prox(x, y, diam, base) {
  noStroke();
  fill(base, 80, 100);
  circle(x, y, diam);
  fill((base + 180) % 360, 80, 100);
  circle(x + diam / 1.5, y + diam / 4, diam / 4);
  fill(base, 80, 100);
  circle(x + diam, y + 3, diam / 3);
}
