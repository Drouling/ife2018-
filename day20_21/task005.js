var i = 0;
var j = 17;
window.onload = animate;
function ani() {
    var img = document.querySelector("#smile");
    if (i < 17) {
        img.style.backgroundPosition = "0 " + (-i) * 480 +"px";
        i++;
        window.setTimeout(ani, 200);
        //console.log(i + "a");
    }
    else if (i == 17) {
        animate();
    }
}
function aniBack() {
    var img = document.querySelector("#smile");
    if (i > 0) {
        i--;
        img.style.backgroundPosition = "0 " + (-i) * 480 +"px";
        window.setTimeout(aniBack, 200);
        //console.log(i + "b");
    }
    else if (i == 0) {
        animate();
    }
}
function animate() {
    if (i < 17) {
        ani();
    }
    else if (i = 17) {
        aniBack();
    }
}