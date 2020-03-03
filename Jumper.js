
//use for 'character'

function jumper() {
  // this.#operation = value;
  this.x = w/2;
  this.y = 0;
  this.gravity = 0.5;//gravity
  this.lift = -10;//jump height
  this.velocity = 0;//speed of gravity
  
  
  //function on screen to put values of character will look like
  this.show = function() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, 50,50);
  };
  
  //build function to take intial velocity and change lift/jump
  this.jump = function() {
    this.velocity += this.lift;
  };
  
  //builds function to update character
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity * 0.92; //air resistance
    
    //IF character hits groubd, movement in y direction will have jumper from leaving ground
    if (this.y > h-25) {
      this.y = h-25;
      this.velocity = 0;
    }
    
    //stops character from leaving ceiling of screen
    if (this.y < 25) {
      this.y = 25;
      this.velocity = 0;
    }
  };
}
