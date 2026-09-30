// looping and conditions
function setup() {
  createCanvas(700, 800);
}

function draw() {
  // tokens
  let dashLengh = 10;
  let dashGap = 25;
  let dashWeight = 8;
  let padding = 40;
  let lineCount = 10;

  background(240);
  
  // outer loop that counts the amount of rows
  for (let i = 0; i < 10; i++) {
    let y = padding + i * ((height - 2 * padding) / (lineCount - 1)); // adding some padding so that thelines don't touch the edges 

    // selecting every other line
    if (i % 2 === 0) {
      strokeWeight(dashWeight * 2);
    } else {
      strokeWeight(dashWeight);
    }
    // inner loop that draws the dots to create the dashed line effect 
    for (let x = padding; x <= width - padding - dashLengh; x += dashLengh + dashGap) {
      line(x, y, x + dashLengh, y);
    }
  }
}
