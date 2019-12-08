var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var lists = document.getElementById("email-sug-wrapper");
var input = document.getElementById("email-input");

var liSelected = 0;
window.onload = function () {
    input.focus();
}

lists.onclick = function (e) {
    if (e.target.nodeName.toLowerCase() == "li") {
        var text = deXss2(e.target.innerText);
        input.value = text;
        hide(lists);
    }
    input.focus();
}

input.onkeyup = function (event) {
    var event = event || window.event;
    var lis = lists.childNodes;
    if (event.keyCode == 27) {
        input.select();
    }
    if (lists.style.display != "" && lists.style.display != "none") {
        if (event.keyCode == 13) {
            var text = deXss2(lis[liSelected].innerText);
            input.value = text;
            hide(lists);
            input.focus();
        }
        if (event.keyCode == 38) {
            if (liSelected != 0) {
                lis[liSelected].style.backgroundColor = null;
                liSelected--;
            }
            else {
                lis[liSelected].style.backgroundColor = null;
                liSelected = lis.length - 1;
            }
        }
        if (event.keyCode == 40) {
            if (liSelected != lis.length - 1) {
                lis[liSelected].style.backgroundColor = null;
                liSelected++;
            }
            else {
                lis[liSelected].style.backgroundColor = null;
                liSelected = 0;
            }
        }
        lis[liSelected].style.backgroundColor = "#ffc5cf";
    }
}

input.oninput = function () {
    reset();
    createList();
    showList();
};

function reset() {
    if (lists.childNodes.length != 0){
        lists.childNodes[0].style.backgroundColor = "#ffc5cf";
        if (liSelected !== 0) {
            liSelected = 0;
        }
    }
}

function deXss1(text) {
    if (text.length != 0){
        text = text.replace(/&/g, "&amp;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");
        text = text.replace(/ /g, " ");
        text = text.replace(/\'/g, "'");
        text = text.replace(/\"/g, '"');
    }
    return text;
}
function deXss2(text) {
    if (text.length != 0){
        text = text.replace("&amp;", "&");
        text = text.replace("&lt;", "<");
        text = text.replace("&gt;", ">");

    }
    console.log(text);
    return text;
}

function deBlank() {
    var i = 0, j = 0;
    var inputText = input.value;
    while (i > -1) {
        i = inputText.indexOf(" ");
        inputText = inputText.slice(i + 1);
        j++;
    }
    if (j > 4) {
        return "";
    }
    else {
        var res = input.value.replace(/(^\s*)|(\s*$)/g, "");
        return res;
    }
}

function changeList() {
    var listStr = [];
    var inputText = deBlank();
    var input1 = "", input2 = "";
    inputText = deXss1(inputText);
    if (inputText.indexOf("@") != -1) {
        input1 = inputText.slice(0, inputText.indexOf("@"));
        input2 = inputText.slice(inputText.indexOf("@") + 1);
    }
    for (var i in postfixList) {
        if (input1 !== "" && postfixList[i].indexOf(input2) === 0) {
            listStr.push(input1 + "@" + postfixList[i]);
        }
        else if (input1 == "") {
            listStr.push(inputText + "@" + postfixList[i]);
        }
    }
    return listStr;
}

function createList() {
    var liText = changeList();
    lists.innerHTML = "";

    for (var i in liText) {
        var li = document.createElement("li");
        lists.append(li);
        lists.childNodes[i].innerHTML = liText[i];
        li.onmouseover = function () {
            this.style.backgroundColor = "#bddfed";
        }
        li.onmouseleave = function () {
            this.style.backgroundColor = null;
        }
    }
}

function showList() {
    if (deBlank() == "") {
        hide(lists);
    }
    else {
        show(lists);
    }
}

function hide(node) {
    node.style.display = "none";
}

function show(node) {
    node.style.display = "block";
}
