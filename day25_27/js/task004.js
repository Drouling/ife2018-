var year = document.getElementById("year-select");
var month = document.getElementById("month-select");
var day = document.getElementById("day-select");
var hour = document.getElementById("hour-select");
var minite = document.getElementById("minite-select");
var second = document.getElementById("second-select");
var result = document.getElementById("result-wrapper");

var date = [year, month, day, hour, minite, second];
var option = document.getElementsByTagName("option");

for (var i = 0; i < option.length; i++) {
    option[i].addEventListener("click", setDate);
}


var nowDate = new Date();
var myDate = new Date();

function setDate() {
    myDate.setFullYear(date[0].value);
    myDate.setMonth(date[1].value - 1);
    myDate.setDate(date[2].value);
    myDate.setHours(date[3].value);
    myDate.setMinutes(date[4].value);
    myDate.setSeconds(date[5].value);
    var time = Format(myDate, "yyyy年MM月dd日 ddddd HH:mm:ss");
    result.innerHTML = result.innerHTML.replace(/\d{4}\年\d*\月\d*\日\s*\星\期\S\s*\w*\:\w*\:\w*/g, time);
    distance();
}

function distance() {
    var time = Math.abs((nowDate - myDate) / 1000);
    var days = (time - time % (60 * 60 * 24)) / (60 * 60 * 24);
    var hours = (time % (60 * 60 * 24) - time % (60 * 60)) / (60 * 60);
    var minites = (time % (60 * 60) - time % 60) / 60;
    var seconds = time % 60; 
    if (myDate < nowDate) {
        result.innerHTML = result.innerHTML.replace("还有", "已经过去"); 
    }
    else {
        result.innerHTML = result.innerHTML.replace("已经过去", "还有"); 
    }
    result.innerHTML = result.innerHTML.replace(/\s*\w*\s*\天\s*\w*\s*\小\时\s*\w*\s*\分\s*\w*\s*\秒/,
            days + "天" + hours + "小时" + minites + "分" + seconds + "秒");
}
