// output information
let gengo, 
    thisYear_JP, 
    thisDay_JP,  
    youbi,
    calYearJP, 
    timeNow_JP;

let numbersKanji = ['０','１','２','３','４', '５', '６','７','８','９']


let h, h1, h2, 
    m, m1, m2,
    s, s1, s2,
    y, y1, y2,
    mm, dd, yy;
let index;


let clock_1;
let circle_1, circle_2, circle_3, circle_4;
let inputWords_1;
let R, g; // 最大圓的半徑, 圈跟圈的距離
let img1, img2, img3;


//  日本星期幾

function getyoubi(y, m, d) {
   var d = new Date(y, --m, d);
   return d && days[d.getDay()+7];
}

class JPclockText {

  constructor() {
  }


  which(){
      let digitDate = int (year() + mm + dd); 
        // digit format ex. 20210802
      let gengos = ['明治','大正','昭和','平成','令和'];
      // 年號切換日期
      if (digitDate >= 20190501) {
        index = 4;
        calYearJP = year() - 2018;
      } else if (digitDate >= 19890108) {
        index = 3;
        calYearJP = year() - 1988;
      } else if (digitDate >= 19261225) {
        index = 2;
        calYearJP = year() - 1925;
      } else if (digitDate >= 19120730) {
        index = 1;
        calYearJP = year() - 1911;
      } else if (digitDate >= 18950617) {
        index = 0;
        calYearJP = year() - 1894;
      } 

      //今年的年號  
      gengo = gengos[index]; 

      // 星期幾轉換
      youbi = getyoubi(year(),month(),day());
      y = str(nf(calYearJP, 2));
      y1 = int(y.charAt(0));
      y2 = int(y.charAt(1));
      y = numbersKanji[y1] + numbersKanji[y2];
    }



    format(){
      
      
  // h = nf(hour(), 2);
  // m = nf(minute(), 2);
  // s = nf(second(), 2);
  // mm = nf(month(), 2);
  // dd = nf(day(), 2);
  // yy = year();
  // let monthName = 
  //     ["Jan","Feb","Mar","Apr","May","Jun",
  //      "Jul","Aug","Sep","Oct","Nov","Dec",];
  // MM = monthName[month() - 1]; 
  // time = h + ":" + m + ":" + s;
  // date = dd + " " + MM;
      
      
      // 數字轉成全形  
      let originalNum = [str(h), str(m), str(s), str(mm), str(dd)];
      let numKan_1 = [];
      let numKan_2 = [];
      let numKan = [];
      let z1, z2;

      for (let i = 0; i <= 4; i++) {

        // 第一位數
        z1 = originalNum[i].charAt(0);
        z1 = int(z1);
        z1 = numbersKanji[z1];
        numKan_1[i] = z1;

        // 第二位數
        z2 = originalNum[i].charAt(1);
        z2 = int(z2);
        z2 = numbersKanji[z2];
        numKan_2[i] = z2;

        numKan[i] = numKan_1[i] + numKan_2[i];
      }
      
      // 全形 的數字資料為
      // numKan = [小時, 分鐘, 秒, 月, 日, 年]

      thisYear_JP = gengo + y + '年';
      thisDay_JP =  numKan[3] + '月' + numKan[4] + '日' + '（' + youbi + '）';
      timeNow_JP = numKan[0] + '時' + numKan[1] + '分' + numKan[2] + '秒';
    }

    show(which){
      text(thisYear_JP,100,100);
      text(thisDay_JP,100,200);
      text(timeNow_JP,100,300);
    }


  }
