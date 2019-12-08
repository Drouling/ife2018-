var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
var arr1 =[];
for (var i in scoreObject) {
    var arr2 = [];
    arr2.push(i);
    for (var j in scoreObject[i]) {
        arr2.push(scoreObject[i][j]);
    }
    arr1.push(arr2);
}
console.log(arr1);
/*转换为
var scoreArray = [
    ["Tony", 95, 79, 68],
    ……
];
*/
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

var menuObject = {};
for (var i = 0; i < menuArr.length; i++) {
    var branch = menuArr[i];
    if (branch[2] == -1) {
        menuObject[branch[0]] = {
            "name": branch[1],
            "subMenu": {}
        }
    }
    if (branch[2] == 1) {
        menuObject[1]["subMenu"][branch[0]] = {
            "name": branch[1],
            "subMenu": {}
        }
    }
    if (branch[2] == 2) {
        menuObject[2]["subMenu"][branch[0]] = {
            "name": branch[1],
            "subMenu": {}
        }
    }
    if (branch[2] == 4) {
        menuObject[1]["subMenu"][4]["subMenu"][branch[0]] = {
            "name": branch[1]
        }
    }
    if (branch[2] == 6) {
        menuObject[2]["subMenu"][6]["subMenu"][branch[0]] = {
            "name": branch[1]
        }
    }
}
console.log(menuObject);
/*转换为
var menuObject = {
    "1": {
        name: "Area1",
        subMenu: {
            "3": {
                name: "Area1-1"
            },
            "4": {
                name: "Area1-2",
                subMenu: {
                    "7": {
                        name: "Area1-2-3"
                    }
                }
            }
        }
    }

    ……

}
*/