let colourPalette; // Declare here, initialize inside setup()

function setup() {
  createCanvas(700, 630);
  noLoop();
  colorMode(HSB, 360, 100, 100, 100);
  
  // Initialize palette after colorMode is set
  colourPalette = palette(0, 120); 
}

function draw() {
  background(220);
  rules();

  
  for (let i = 0; i < 5; i++) {
    push();
    translate(width * 0.40, 10 + i * 120);
    
    fill(random(colourPalette)); 
    
    sun(200, 100, 20, 20, 8);
    pop();
  }
  // seccond line
  for (let i = 0; i < 5; i++) {
    push();
    translate(width * 0.05, 10 + i * 120);
    
    fill(random(colourPalette)); 
    
    sun(200, 100, 20, 20, 8);
    pop();
  }
}

// FIX: Returns actual p5 color objects instead of just hue numbers
function palette(baseHue, deg) {
  // Keep negative angles positive for HSB mapping
  let complementaryNeg = (baseHue - deg + 360) % 360; 
  
  return [
    color(baseHue, 80, 90),
    color((baseHue + deg) % 360, 80, 90),
    color(complementaryNeg, 80, 90)
  ];
}

// sun function 
function sun(xPos, yPos, rad, bit, num) {
  for (let t = 0; t < TWO_PI; t += TWO_PI / num) {
    let x = xPos + cos(t) * rad;
    let y = yPos + sin(t) * rad;
    square(x, y, bit);
  }
  square(xPos, yPos, rad * 2 - bit);
}

function rules() {
  stroke(0);
  // verticals 
  line(width * 0.33, 0, width * 0.33, height);
  line(width * 0.66, 0, width * 0.66, height);
  // horizontals
  line(0, height * 0.33, width, height * 0.33);
  line(0, height * 0.66, width, height * 0.66);

  // diagonals
  line(0, 0, width, height);
  line(0, height, width, 0);
  noStroke();
}
