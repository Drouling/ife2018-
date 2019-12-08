var o = document.body;
var p = document.createElement("p"); 
o.appendChild(p);

window.onload = function() {
    setInterval(showDate, 1000);
}

function week(weekday) {
    var weekD = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    return weekD[weekday];
}

function formTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function showDate() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var day = myDate.getDate();
    var weekday = myDate.getDay();
    var h = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
    weekday = week(weekday);
    month = formTime(month);
    day = formTime(day);
    h = formTime(h);
    m = formTime(m);
    s = formTime(s);
    var date = year + "年"
            + month + "月"
            + day + "日"
            + weekday + " "
            + h + ":"
            + m + ":"
            + s;
    
    p.innerHTML = date; 

}


