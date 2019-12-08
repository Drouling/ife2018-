var btn = document.querySelectorAll("button");
var result = document.getElementById("result");
var numA = document.getElementById("num-a");
var numB = document.getElementById("num-b");

btn[0].addEventListener("click", getLength);
btn[1].addEventListener("click", get3);
btn[2].addEventListener("click", joined);
btn[3].addEventListener("click", firstBinA);
btn[4].addEventListener("click", lastAinB);
btn[5].addEventListener("click", sliceStr);
btn[6].addEventListener("click", getLine);
btn[7].addEventListener("click", getStr);
btn[8].addEventListener("click", upperCase);
btn[9].addEventListener("click", lowerCase);
btn[10].addEventListener("click", deBlank);

function check() {
    var radioA = document.getElementById("radio-a");
    var radioB = document.getElementById("radio-b");
    if (radioA.checked) {
        var strA = document.getElementById("str-a").value;
        return strA;
    }
    else if (radioB.checked) {
        var strB = document.getElementById("str-b").value;
        return strB;
    }
}

function getLength() {
    var str = check();
    result.innerHTML = str.length;
}

function get3() {
    var str = check();
    result.innerHTML = str[2];
}

function joined() {
    var strA = document.getElementById("str-a").value;
    var strB = document.getElementById("str-b").value;
    var str = strA.concat(strB);
    result.innerHTML = str;
}

function firstBinA() {
    var strA = document.getElementById("str-a").value;
    var strB = document.getElementById("str-b").value;
    if (strA.indexOf(strB) !== -1) {
        result.innerHTML = "第" + (strA.indexOf(strB) + 1) + "位";
    }
    else {
        result.innerHTML = "A中不存在B";
    }
}

function lastAinB() {
    var strA = document.getElementById("str-a").value;
    var strB = document.getElementById("str-b").value;
    if (strB.lastIndexOf(strA) !== -1) {
        result.innerHTML = "第" + (strB.lastIndexOf(strA) + 1) + "位";
    }
    else {
        result.innerHTML = "B中不存在A";
    }
}

function sliceStr() {
    var str = check();
    var strAtoB = str.slice(numA.value, numB.value);
    result.innerHTML = strAtoB;
}

function getLine() {
    var str = check();
    var lines = str.split(/\r*\n/);
    var linesCount = lines.length;
    result.innerHTML = linesCount;
}

function getStr() {
    var str = check();
    var childStr = str.substr(numA.value, numB.value);
    result.innerHTML = childStr;
}

function upperCase() {
    var str = check();
    str = str.toUpperCase();
    result.innerHTML = str;
}

function lowerCase() {
    var str = check();
    str = str.toLowerCase();
    result.innerHTML = str;
}

function deBlank() {
    var str = check();
    str = str.replace(/(^　*)| (　*$)/g, "");
    result.innerHTML = str;
}