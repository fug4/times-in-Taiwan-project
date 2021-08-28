function JPJP () {
  // ～～～～～～日本時鐘～～～～～～～
  textFont('Shippori Mincho');
  textAlign(CENTER);
  R = 200; 
  g = 20;
  // 設定時間日期格式
  h = nf(hour(), 2);
  m = nf(minute(), 2);
  s = nf(second(), 2);
  mm = nf(month(), 2);
  dd = nf(day(), 2);
  yy = year();
  let monthName = 
      ["Jan","Feb","Mar","Apr","May","Jun",
       "Jul","Aug","Sep","Oct","Nov","Dec",];
  MM = monthName[month() - 1]; 
  time = h + ":" + m + ":" + s;
  date = dd + " " + MM;

  // ** 先計算日本的日期
  clock_1.which();
  clock_1.format();  // 轉成全形＋套用日期格式

  // output variations:
  // Raw: gengo, youbi, calYearJP
  // Formatted: thisYear_JP, thisDay_JP, timeNow_JP

  // ** 套入算好的日期 
  inputWords = [thisYear_JP, thisDay_JP, timeNow_JP];
  
  // input: (message, size, spacing, r) 
  // repeat times? -> console.log(repeat);
  
  // ang1 = (second()/60) * 2
  let ang1 = frameCount * 0.0005 * -1
  let ang2 = frameCount * 0.001
  let ang3 = (second()/60) * 2
  
  // all years
  push();
  rotate(ang1);
  circle_1 = new circleWord(inputWords[0], 15.67, 0, R, 16);
  circle_1.show();
  circle_2 = new circleWord(inputWords[0], 15.67, 0.3, R - 3 * g, 11);
  circle_2.show();
  circle_3 = new circleWord(inputWords[0], 15, -0.7, R - 6 * g, 7);
  circle_3.show();
  circle_4 = new circleWord(inputWords[0], 15, -2.8, R - 9 * g, 2);
  circle_4.show();
  pop();

  // all months
  push();
  rotate(ang2);
  circle_1 = new circleWord(inputWords[1], 15.7, 0, R - g, 8);
  circle_1.show();
  circle_2 = new circleWord(inputWords[1], 15, -1, R - 4* g, 6);
  circle_2.show();
  circle_3 = new circleWord(inputWords[1], 15, -1, R - 7* g, 3);
  circle_3.show();
  pop();

  // all times
  push();
  rotate(ang3);
  circle_1 = new circleWord(inputWords[2], 16, 0, R - 2 * g, 7);
  circle_1.show();
  circle_2 = new circleWord(inputWords[2], 15, -1.1, R - 5 * g, 5);
  circle_2.show();
  circle_3 = new circleWord(inputWords[2], 15, -1.1, R - 8 * g, 2);
  circle_3.show();
  pop();
}

