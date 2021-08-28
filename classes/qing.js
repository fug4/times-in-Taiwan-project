let imgL, imgR; // 文字圖片左右
let T; //文字大小
let message;
let X = 100, Y = 0; // 清朝字座標
let scaleT;
let imgLW = 788, imgLH = 2621, imgRW = 723, imgRH = 2425; //左右圖片原始尺寸
let scaleIMG = 1.8; // 圖片縮放
let newW, newH; 
let space;
let a = 0, b = 0;
let left, right;

function preload(){
  imgL = loadImage('images/manchu0825_L.png'); // 圖片788 × 2621
  imgR = loadImage('images/manchu0825_R.png'); // 圖片723 × 2425
}


// ＊＊＊清朝左右classes＊＊＊

class lefts {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    imageMode(CORNER);
  }
  show (x, y) {
    for (let i = 0; i < message.length; i++) {
      // 文字1
      newW = T * scaleIMG;
      newH = imgLH * T / imgLW * scaleIMG
      text (message.charAt(i), this.x, this.y + i * scaleT);
      image (imgL, this.x - newW * 0.3, this.y + message.length * scaleT + space, newW, newH);
    }
  }
}

class rights {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  show (x, y) {
    // 每個字＋圖的組合總高度
    
    for (let i = 0; i < message.length; i++) {
      // 文字1
      newW = T * scaleIMG;
      newH = imgRH * T / imgRW * scaleIMG
      text (message.charAt(i), this.x, this.y + i * scaleT);
      image (imgR, this.x - newW * 0.3, this.y + message.length * scaleT + space, newW, newH);
    }
  }
}

// ＊＊＊清朝function＊＊＊

function qing () {

  // *** 設定 ***
  T = 40; // 字體大小
  textSize(T);
  textFont('Adobe Kaiti Std R');
  textAlign(LEFT, TOP)
  scaleT = 40; // 直行字距比例
  space = 5 // 圖文距離
  
  
  // ** 左邊 農曆月、日、時辰 **
  message = lunarText
  a = a + 1;
  newW = T * scaleIMG;
  newH = imgLH * T / imgLW * scaleIMG
  
  let Q = message.length * scaleT + newH + space; // 每個字＋圖的組合總高度
  left = new lefts(X, Y + a);
  left.show();
  left = new lefts(X, Y + a + Q);
  left.show();
  left = new lefts(X, Y + a + Q * -1);
  left.show();
  // 當最上面的文字出現 => loop回到開頭
  if (a + Q * -1 > 0) {
    a = 0;
  }
  
  // ** 右邊 清朝年**
  b = b - 1;
  message = qinYear;
  let Z = message.length * scaleT + newH + space; // 每個字＋圖的組合總高度
  right = new rights (X + T * 2, Y + b)
  right.show();
  right = new rights (X + T * 2, Y + b + Z + 15)
  right.show();
  // 當最上面的文字出現 => loop回到開頭
  if (b + Z + 15 < 0) {
    b = 0;
  } 
}