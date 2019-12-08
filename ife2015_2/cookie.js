// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    var userAgent = navigator.userAgent; 
    //Edge
    if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
    }
    //IE11
    else if (userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1) {
        return "IE 11";
    }
    //IE 11 以下
    else if (userAgent.indexOf("MSIE") > -1) {
        var IEverson = userAgent.match(/MSIE \d+\.\d+/);
        return IEverson[0].slice(2);
    }
    else {
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var exDate = new Date();
    exDate.setDate(exDate.getDate() + expiredays); 
    document.cookie = cookieName + "=" + cookieValue
        + ";expires=" + exDate.toGMTString();
    console.log("success");
}

// 获取cookie值
function getCookie(cookieName) {
    if(document.cookie.length > 0){
        let cArr = document.cookie.split(";");
        for(let i = 0; i < cArr.length; i++) {
            let c = cArr[i].trim();
            let cStart = c.indexOf(cookieName + "=");
            if(cStart != -1){
                return c.substring(cStart + cookieName.length + 1, c.length);
            }
        }
    }
    return "";
}

console.log(isIE());
//alert(isIE());
//setCookie("a",11,10);
//getCookie("a");