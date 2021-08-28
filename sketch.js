
let mouseSize = 30;
let tempX, tempY;

function setup() {
  createCanvas(1000, 800);
  
  //日本設定
  clock_1 = new JPclockText();
}

function draw() {
  background(220);
  imageMode(CENTER)
  image (worldMap, width/2, height/2 + 100, width * 2 , width * 2);
  image (hlALL, width/2, height/2 + 100, width * 2 , width * 2);
  
  // 滑鼠圈圈＆線
  fill(0);
  circle(mouseX, mouseY, mouseSize);
  line(width/2, height/2 + 100,mouseX,mouseY)
  
  
  // 看滑鼠位置用
  if (mouseIsPressed) {
    print ('('+ str(mouseX) + ',' + str(mouseY)+')');
  }
  
  
  
  
  ///// ***** 日本*****
  push();
  tempX = 250 + mouseX - 550;
  tempY = 200 + mouseY - 350;

  let posX = [560, 605, 520, 580];
  let posY = [360, 430, 430, 470];
  

  if (posX[0] <= mouseX && mouseX <= posX[1] && posY[0] <= mouseY && mouseY <= posY[1] ) {
      image (hlJP, width/2, height/2 + 100, width * 2 , width * 2);
      line(mouseX, mouseY, tempX, tempY);
      //滑鼠變紅色
      push();
      fill('RED')
      circle(mouseX, mouseY, mouseSize);
      pop();
    
      translate(tempX,tempY);
      //白色底圈圈
      push();
      fill(255);
      circle(0,0, 450)
      pop();
      //日本時鐘本人
      JPJP();
  } else if(posX[2] <= mouseX && mouseX <= posX[3] && posY[2] <= mouseY && mouseY <= posY[3]) {
      image (hlJP, width/2, height/2 + 100, width * 2 , width * 2);
      fill('RED')
      line(mouseX, mouseY, tempX, tempY);
      circle(mouseX, mouseY, mouseSize);
      translate(tempX,tempY);
      //白色底圈圈
      push();
      fill(255);
      circle(0,0, 450)
      pop();
      //日本時鐘本人
      JPJP();
    }
  pop();
  
  
  
  ///// ***** 清朝 *****
    push();
  tempX = 250 + mouseX - 550;
  tempY = 200 + mouseY - 350;

  posX = [302, 558, 410, 469, 520, 365, 522, 507];
  posY = [353, 518, 365, 383, 433, 475, 413, 434];
  
  if (posX[0] <= mouseX && mouseX <= posX[1] && posY[0] <= mouseY && mouseY <= posY[1] ) {
    if (mouseX >= posX[2] && mouseX <= posX[3] && mouseY >= posY[2] && mouseY<= posY[3]){} 
    else if (mouseY >= posY[5] && mouseX <= posX[5]) {}
    else if (mouseX >= posX[6] && mouseY >= posY[6] && mouseY <= posY[7]){}
    else if (mouseX >= posX[7] && mouseY >= posY[7]){}
    else {
      image (hlCN, width/2, height/2 + 100, width * 2 , width * 2);
      
      //滑鼠變紅色
      push();
      fill('RED')
      // line(mouseX, mouseY, tempX, tempY);
      circle(mouseX, mouseY, mouseSize);
      pop();
      
      
      qing();
    }
  }
  
  // console.log('x: '+ mouseX+ 'y:' + mouseY);
      //白色底圈圈
      // push();
      // fill(255);
      // circle(0,0, 450)
      // pop();
      // //日本時鐘本人
      // JPJP();

  pop();
  
  
}



