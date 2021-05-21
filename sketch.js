let stick;
let chart;
let imgs = [];
let img;
let doge;
let targetImg;
let stage = 0;
let myFont;
let peace;
let retire;
let t = 0;

function preload() {
  for(let i=0; i<5; i++) {
    imgs[i] = loadImage("./assets/images/frame" + i + ".png");
  }
  
  img = loadImage("./assets/shiba_ani.gif");
  targetImg = loadImage("./assets/target_doge.gif");
  myFont = loadFont("./assets/rocket.ttf");
  peace = loadImage("./assets/peace_shiba2.jpg");
  retire = loadImage("./assets/dev_shiba.gif");
}

function setup() {
  
  fullscreen();
  createCanvas(windowWidth, windowHeight);
  chart = loadImage('./assets/dogechart2.png');
  dogeArray = new Doges(50);
  targetDoge = new Doge(width/2, height/2, true, 13);  
}

function draw() {
  textAlign(CENTER);
  fill(0);
  textFont(myFont);
  textSize(100);

  switch (stage) {
    case 0:      
      image(chart, 0,0,width, height)
      dogeArray.display();
      targetDoge.display();
      gameReady();
      break;
  
    case 1:;
      image(chart, 0,0,width, height)
      dogeArray.display();
      dogeArray.move();
      dogeArray.addDoge();
      targetDoge.move();
      targetDoge.display();
      break;
    
    case 2: 
      
      push();      
      fadeIn(); 
      image(peace, 0,0,width, height)
      text("ESCAPE SUCCESS", width/2,height/2+250);
      pop();      
      break;
    
    case 3:       
      push();   
      fadeIn();
      image(retire, 0,0,width, height)
      text("ESCAPE FAIL", width/2,height/2+250);
      pop();
      break;
  }

  push();
  textAlign(CENTER);
  fill(0,127);
  textFont(myFont);
  textSize(20);
  text("다시하기: R", width-100,30);
  text("포기하기: Q", width-100,60);
  pop();
}

function mousePressed() {
  if(stage==0) {
    stage ++;
  }
  levelUp();
  targetDoge.isGotten();
}

function keyPressed() {
  if(key == 'q') {
    t = 0;
    stage =3;
  } else if (key == 'r') {
    stage =0;
  } else if(key =='p') {    
    t = 0;
    stage =2;
  }
}

function fadeIn() {
  if(t<255) {
    t++;
  }
  tint(255,t);
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
  text("시간이 지날수록, 도지를 자꾸 클릭할수록 탈출이 어려워지니, 단번에 탈출하세요!", width/2,height/2+70);
  // text("탈출을 포기하시려면 Q키를 누르세요.", width/2,height/2+120);
  textSize(15);
  pop();
}