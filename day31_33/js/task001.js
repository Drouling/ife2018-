var region = document.getElementById("region-select");
var tDiv = document.getElementById("table-wrapper");

region.onchange = function (e) {
    showTable(e);
}

function getData(e) {
    var dataList = [];
    var option = e.target.name;
    var selected = e.target.value;
    
    for (var i in sourceData) {
        var selector = sourceData[i][option];
        if (selector == selected) {
            var arr1 = [], arr2 = [];

            arr1.push(sourceData[i]["product"]);
            arr1.push(sourceData[i]["region"]);
            for(var s in sourceData[i]["sale"]) {
                arr2.push(sourceData[i]["sale"][s]);
            }
            arr1 = arr1.concat(arr2);
            dataList.push(arr1);
        }
    }
    return dataList;
}

function showTable(e) {
    tDiv.innerHTML = null;
    var dataList = getData(e);
    console.log(dataList);
    var table = document.createElement("table");
    var tr1 = document.createElement("tr");
    var thContent = ["商品", "地区", "1月", "2月", "3月",
                "4月", "5月", "6月",
                "7月", "8月", "9月",
                "10月", "11月", "12月"];
    tDiv.append(table);
    table.append(tr1);
    for (var i = 0; i < dataList[0].length; i++) {
        var th = document.createElement("th");
        tr1.append(th);
        th.innerText = thContent[i];
    }
    for (var i = 0; i < dataList.length; i++) {
        var tr2 = document.createElement("tr");
        for (var j = 0; j < dataList[0].length; j++) {
            var td = document.createElement("td");
            td.innerText = dataList[i][j];
            tr2.append(td);
        }
        table.append(tr2);
    }

}
function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}
 
var f1 = Foo(),
    f2 = Foo();
f1();
f1();
f2();