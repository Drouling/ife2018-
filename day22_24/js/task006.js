var stack = ["apple", "pear"];
var stackReverse = stack.concat();
var btn = document.querySelectorAll("button");
var element = document.getElementById("stack-input");
var p1 = document.getElementById("stack-cont1");
var p2 = document.getElementById("stack-cont2");

btn[0].addEventListener("click", pushIn);
btn[1].addEventListener("click", pushOut);
btn[2].addEventListener("click", printFirst);
btn[3].addEventListener("click", isNull);

function pushIn() {
    stack.push(element.value);
    p1.innerHTML = "栈内容：" + stack.join("-&gt;");
    stackReverse.unshift(element.value);
    p2.innerHTML = "栈内容：" + stackReverse.join("&lt;-");
}

function pushOut() {
    stack.pop();
    p1.innerHTML = "栈内容：" + stack.join("-&gt;");
    stackReverse.shift();
    p2.innerHTML = "栈内容：" + stackReverse.join("&lt;-");
}

function printFirst() {
    console.log("1:" + stack[stack.length - 1]);
    console.log("2:" + stackReverse[0]);
}

function isNull() {
    if (stack.length !== 0) {
        console.log("栈不为空");
    }
    else {
        console.log("栈为空");
    }
}