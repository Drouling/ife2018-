var btn = document.getElementsByTagName("button"); 
/*
var numA = document.querySelector("#num-a");
var numB = document.querySelector("#num-b");
var radioA = document.querySelector("#radio-a");
var radioB = document.querySelector("#radio-b");
*/
var result = document.querySelector("#result");

btn[0].addEventListener("click", checkNum);
btn[1].addEventListener("click", aDotB);
btn[2].addEventListener("click", absNum);
btn[3].addEventListener("click", roundUp);
btn[4].addEventListener("click", roundDown);
btn[5].addEventListener("click", rounding);
btn[6].addEventListener("click", maxNum);
btn[7].addEventListener("click", minNum);

function isNum(num) {
    if (num.value === "") {
        console.log("feishu");
        return false;
    }
    else {
        num = Number(num.value);
        if (!isNaN(num)) {
            return true;
        }
        else {
            console.log("feishu");
            return false;
        }
    } 
}

function checkNum() {
    var radioA = document.querySelector("#radio-a");
    var radioB = document.querySelector("#radio-b");
    if (radioA.checked) {
        var numA = document.querySelector("#num-a");
        if (isNum(numA)) {
            return Number(numA.value);
        }

    }
    else if (radioB.checked) {
        var numB = document.querySelector("#num-b");
        if (isNum(numB)) {
            return Number(numB.value);
        }
    }
}

function aDotB() {
    var numA = document.querySelector("#num-a");
    var numB = document.querySelector("#num-b");
    if (isNum(numA) && isNum(numB)) {
        numA = Number(numA.value);
        numB = Number(numB.value);
        var w = Math.pow(10, numB);
        var newA = Math.round(numA * w) / w;
        result.innerHTML = newA;
    }
}

function absNum() {
    var radioA = document.querySelector("#radio-a");
    var radioB = document.querySelector("#radio-b");
    var numA = document.querySelector("#num-a");
    var numB = document.querySelector("#num-b");
    if (radioA.checked && isNum(numA)) {
        numA = Number(numA.value);
        result.innerHTML = Math.abs(numA);

    }
    else if (radioB.checked && isNum(numB)) {
        numB = Number(numB.value);
        result.innerHTML = Math.abs(numB);
    }
}

function roundUp() {
    var num = checkNum();
    result.innerHTML = Math.ceil(num);
}

function roundDown() {
    var num = checkNum();
    result.innerHTML = Math.floor(num);
}

function rounding() {
    var num = checkNum();
    result.innerHTML = Math.round(num);
}

function maxNum() {
    var numA = document.querySelector("#num-a");
    var numB = document.querySelector("#num-b");
    var a = Number(numA.value);
    var b = Number(numB.value);
    if (isNum(numA) && isNum(numB)) {
        if (a >= b) {
            result.innerHTML = a;
        }
        else {
            result.innerHTML = b;
        }
    }
}

function minNum() {
    var numA = document.querySelector("#num-a");
    var numB = document.querySelector("#num-b");
    var a = Number(numA.value);
    var b = Number(numB.value);
    if (isNum(numA) && isNum(numB)) {
        if (a <= b) {
            result.innerHTML = a;
        }
        else {
            result.innerHTML = b;
        }
    }
}