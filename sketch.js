let stick;
let chart;
let imgs = [];
let img;
let dodge;
let targetImg;
let stage = 0;
let myFont;
let peace;
let retire;

function preload() {
  for(let i=0; i<5; i++) {
    imgs[i] = loadImage("./assets/images/frame" + i + ".png");
  }
  
  img = loadImage("./assets/shiba_ani.gif");
  targetImg = loadImage("./assets/target_dodge.gif");
  myFont = loadFont("./assets/rocket.ttf");
  peace = loadImage("./assets/peace_shiba2.jpg");
  retire = loadImage("./assets/dev_shiba.gif");
}

function setup() {
  
  fullscreen();
  createCanvas(windowWidth, windowHeight);
  chart = loadImage('./assets/dodgechart2.png');
  dodgeArray = new Dodges(50);
  targetDodge = new Dodge(width/2, height/2, true, 13);  
}

function draw() {
  switch (stage) {
    case 0:      
      image(chart, 0,0,width, height)
      dodgeArray.display();
      targetDodge.display();
      gameReady();
      break;
  
    case 1:;
      image(chart, 0,0,width, height)
      dodgeArray.display();
      dodgeArray.move();
      dodgeArray.addDodge();
      targetDodge.move();
      targetDodge.display();
      break;
    
    case 2:      
      image(peace, 0,0,width, height)
      break;
    
    case 3:      
      image(retire, 0,0,width, height)
  }
    
}

function mousePressed() {
  if(stage==0) {
    stage ++;
  }
  levelUp();
  targetDodge.isGotten();
}

function keyPressed() {
  if(key == 'r') {
    stage =3;
  } else if (key == 'p') {
    stage =2;
  }
}

function gameReady() {
  push();
  background(115, 115, 115,150);
  textAlign(CENTER);
  fill(255);
  textFont(myFont);
  textSize(50);
  text("KEY 도지를 잡아 탈출하세요", width/2,height/2-50);
  textSize(30);
  text("시간이 지날수록, 도지를 자꾸 클릭할수록 탈출이 점점 어려워집니다.", width/2,height/2+70);
  text("탈출을 포기하시려면 R키를 누르세요.", width/2,height/2+120);
  textSize(15);
  pop();
}