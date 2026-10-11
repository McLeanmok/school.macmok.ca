h

void setup() {
 size(640, 640) ;
 colorMode(HSB, 360, 100, 100);
 noLoop() ;
}

void draw() {
  
  background(0);
  for(int i=0; i<10; i=i+1) {
    //int col = palette(180)[floor(random(0,3))] ;
    int col = hueVal(180, 20) ;
    stroke(col, 100, 100); 
    stamp(random(width), random(height), 25*i) ;
  }
}

int hueVal(int base, int deg) {
  // generate a random number for hue offset
  int ran = floor(random(0,3))*deg;
  // add offset to the base and wrap around 360
  int output = (base+ran) % 360 ;
  return  output;
}

// palette generator function
int[] palette(int base) {
  int c1 = base ;
  int c2 = (base+120) % 360 ;
  int c3 = (base+240) % 360 ;
  int[] output = {c1, c2, c3} ;
  return output;
}

// define our stamp
void stamp(float x, float y, float s) {
  noFill() ;
  //stroke(hueVal(50, 20), 100, 100, 200);
  strokeWeight(s*0.1) ;
  if(random(1) < 0.5) {
    rect(x, y, s, s);
  } else {
    ellipse(x, y, s, s);
  }

}
