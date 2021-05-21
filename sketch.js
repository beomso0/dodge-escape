let stick;
let chart;
let imgs = [];
let img;
let dodge;
let targetImg;

function preload() {
  for(let i=0; i<5; i++) {
    imgs[i] = loadImage("./images/frame" + i + ".png");
  }
  
  img = loadImage("./shiba_ani.gif");
  targetImg = loadImage("./target_dodge.gif");
}

function setup() {
  createCanvas(1350, 650);
  chart = loadImage('./dodgechart2.png');
  dodgeArray = new Dodges(50);
  targetDodge = new Dodge(width/2, height/2, true, 13);
}

function draw() {
  noStroke();
  image(chart, 0,0,width, height);
  dodgeArray.display();
  dodgeArray.addDodge();
  targetDodge.move();
  targetDodge.display();  
}

function mousePressed() {
  levelUp();
  targetDodge.isGotten();
}


// class Stick {
//   constructor() {
//     this.length = 100;

//   }
// }

