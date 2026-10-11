// setup
function setup() {
  createCanvas(640, 640);
  noLoop();
colorMode(HSB, 360, 100, 100); // setting up Processing to use the HSB colour mode 
}

function draw() {
  background(250);
  // storing the function in a variable
  const hues = palette(90);

  // placing random squares on the page
  for (let i = 0; i < 100; i++) {
    const hue = hues[floor(random(hues.length))];
    stamp(random(width), random(height), 85, hue);
  }
}
// functions

// palette 
function palette(baseHue) {
  return [
    baseHue,
    (baseHue + 120) % 360,
    (baseHue + 240) % 360,
  ];
}
// hueva - that randomly draws the huel
function hueVal(base, deg) {
  let rand = floor(random(0, 3)) * deg;
  let out = (base + rand) % 360;
  return out;
}

// stamp
function stamp(x, y, s, hue) {
  noFill();
  stroke(hue, 280, 280);
  strokeWeight(5);
  // drawing squares and lines 
  if (random(1) < 0.5) {
      rect(x, y, s, s);
  }  else {
   line(x, y, x +s, y + s)
    }
}
