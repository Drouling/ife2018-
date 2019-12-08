var queue = ["apple", "pear"];
var queueReverse = queue.concat();
var btn = document.querySelectorAll("button");
var element = document.getElementById("queue-input");
var p1 = document.getElementById("queue-cont1");
var p2 = document.getElementById("queue-cont2");

btn[0].addEventListener("click", pushIn);
btn[1].addEventListener("click", pushOut);
btn[2].addEventListener("click", printFirst);
btn[3].addEventListener("click", isNull);

function pushIn() {
    queue.unshift(element.value);
    p1.innerHTML = "队列内容：" + queue.join("-&gt;");
    queueReverse.push(element.value);
    p2.innerHTML = "队列内容：" + queueReverse.join("&lt;-");
}

function pushOut() {
    queue.pop();
    p1.innerHTML = "队列内容：" + queue.join("-&gt;");
    queueReverse.shift();
    p2.innerHTML = "队列内容：" + queueReverse.join("&lt;-");
}

function printFirst() {
    console.log("1:" + queue[queue.length - 1]);
    console.log("2:" + queueReverse[0]);
}

function isNull() {
    if (queue.length !== 0) {
        console.log("队列不为空");
    }
    else {
        console.log("队列为空");
    }
}