var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

arr1.sort((a, b) => a - b);
console.log(arr1);
arr1.reverse();
console.log(arr1);

arr2.sort();
console.log(arr2);
arr2.reverse();
console.log(arr2);

arr3.sort((a, b) => b[1] - a[1]);
console.log(arr3);

arr4.sort((a, b) => a.value - b.value);
console.log(arr4);