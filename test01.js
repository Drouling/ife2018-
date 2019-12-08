var n = 6;//readline();
var a = [1,3,2,4,6,5];//readline().split(" ");
function main(n, a){
    var res = [];
    //确定k
    for (var k = 1; k<=n; k++) {
        //找出最大序列
        var piece = [];
        var pieceInt = 0;
        for (var i = 0;i<n;i++) {
            if (i+k <= n){
                var p = a.slice(i,i+k);
                var pInt = parseInt(p.join(""));
                //console.log(pInt);
                if(i==0 || pieceInt < pInt){
                    pieceInt=pInt;
                    piece = p;
                    //console.log(pieceInt);
                }
            }
            
        }
        console.log(piece);
        res[k] = Math.min(...piece);
    }
    return res.join(" ");
}
console.log(main(n,a));
