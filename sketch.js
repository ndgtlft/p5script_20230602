let _num = 5;
let _circleArr = [];

function setup() {
  createCanvas(1000, 400);
  background(255);
  strokeWeight(1);
  fill(150, 50);
  drawCircles(); 
}

function draw() {
  // background(255);
  for (let i = 0; i < _circleArr.length; i++) {
    let thisCirc = _circleArr[i];
    thisCirc.updateMe();
  }
}

function mouseReleased(){
  drawCircles();
}

function drawCircles() {
  background(255);
  for (let i = 0; i < _num; i++) {
    let thisCirc = new Circle();
    thisCirc.drawMe();
    _circleArr.push(thisCirc);
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = random(100) + 10;
    this.linecol = color(random(255), random(255), random(255));
    this.fillcol = color(random(255), random(255), random(255));
    this.alpha = random(255);
    this.xmove = random(10) - 5;
    this.ymove = random(10) - 5;
    this.sizeT = random(100);
  }

  drawMe() {
    noStroke();
    fill(this.fillcol, this.alpha);
    textSize(this.sizeT); 
    text('🤩', this.x, this.y); 
    stroke(this.linecol, 150);
    noFill();
    textSize(this.sizeT); 
    text('🤩', this.x, this.y);
  }

  updateMe() {
    this.x += this.xmove;
    this.y += this.ymove;
    if(this.x > (width+this.radius)){
      this.x = 0 - this.radius;
    }
    if(this.x < (0 - this.radius)){
      this.x = width + this.radius;
    }
    if(this.y > (height+this.radius)){
      this.y = 0 - this.radius;
    }
    if(this.y < (0 - this.radius)){
      this.y = height + this.radius;
    }
    this.drawMe();
  }
}