let words;
let stem, stems, branch, branches;
let timesC, timeC, dayC, yearC;
let indexQ = 0;
let days = ['日','一','二',
     '三','四','五','六',
     '日','月','火', '水','木','金','土'];

//  星期幾
function getDayC(y, m, d) {
   var d = new Date(y, --m, d);
   return d && days[d.getDay()];
}
  
stems = 
  ['甲', '乙', '丙', '丁', '戊', 
   '己', '庚', '辛', '壬', '癸'];
branches = 
  ['子', '丑', '寅', '卯', '辰', 
   '巳', '午', '未', '申', '酉', '戌', '亥'];
timesC = 
  ["子時", "丑時", "寅時", "卯時", "辰時", 
  "巳時", "午時", "未時", "申時", "酉時", 
  "戌時", "亥時", "子時"];


var d = Lunar.fromDate(new Date());
// 農曆月 日 時辰
var lunarText = d.getMonthInChinese()+'月'+d.getDayInChinese()+d.getTimeZhi()+'時'; 
var converter = window.index.NumberToChineseWords;

// 如果清朝沒滅今年是宣統幾年
var qinYear = d.getYear() - 1908;
//數字轉中文
qinYear = '大清宣統'+converter.toWords(qinYear)+'年';

//民國幾年
var rocYear = d.getYear() - 1911;


function clockCH () {
    //  天干
    yearC = year() - 1900 + 36;
    indexQ = yearC % 10;
    stem = stems [indexQ];
    //  地支
    indexQ = yearC % 12;
    branch = branches [indexQ];
    //  農曆年
    yearC = stem + branch + '年';
    //  時辰
    indexQ = int((hour() - 1) / 2) + 1;
    timeC = timesC [indexQ];
    
    dayC = getDayC(year(),month(),day())
    // daysJP = ['日','月','火', '水','木','金','土'];

    words = yearC + '某月某日' + timeC;
    console.log(words);
  
}