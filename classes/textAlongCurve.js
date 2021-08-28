let repeat; 

class circleWord {
	constructor(message, size, spacing, r, times) {
      this.message = message;
      this.size = size;
      this.spacing = spacing;
      this.r = r; // 半徑
      this.times = times; // 重複幾次
	}
  
	show(){ 
      let arclength = 0; // We must keep track of our position along the curve
      let arclengthFull = 0;
      let w = 0; // 單字寬度
      let W = 0; // 句子寬度
      textSize(this.size);
      // 圓形數據
      // ellipse(0, 0, this.r*2, this.r*2);
      let C = 2 * PI * this.r;  // 圓周
	  for (var i = 0; i < this.message.length; i ++ ) {
	    // The character and its width
	    let currentCharOriginal = this.message.charAt(i);
	    // Instead of a constant width, we check the width of each character.
	    w = textWidth(currentCharOriginal) + this.spacing; 
	    // Each box is centered so we move half the width
	    arclength += w/2;   
	    // 計算該段文字在圓上的周長
	    arclengthFull = arclengthFull + w; 
	  }
    // 該段文字重複幾次才能填滿圓
    repeat = C / arclengthFull;
      
  push();
      
  this.message = this.message.repeat(this.times);
  for (var i = 0; i < this.message.length; i ++ ) {
    let currentChar = this.message.charAt(i);
    W = textWidth(currentChar) + this.spacing; 
    // Each box is centered so we move half the width
    arclength += W/2;   
    // Angle in radians is the arclength divided by the radius
    // Starting on the left side of the circle by adding PI
    let theta = PI + arclength / this.r;
    push();
    // Polar to Cartesian conversion allows us to find the point along the curve. See Chapter 13 for a review of this concept.
    translate(this.r*cos(theta), this.r*sin(theta)); 
    // Rotate the box (rotation is offset by 90 degrees)
    rotate(theta + PI/2); 
    // Display the character
    fill(0);
    text(currentChar, 0, 0);
    pop();
    // Move halfway again
    arclength += w/2;
  }
    
      
  pop();	

	}
}