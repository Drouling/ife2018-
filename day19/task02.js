function getAllListItem() {
    // 返回页面中所有li标签
    var lists = document.querySelectorAll("li");
    return lists;
}

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    var spans = document.querySelector("#" + sectionId).querySelectorAll("span");
    var htmlSpans = new Array();
    for (var i = 0; i < spans.length; i++){
        if (spans[i].innerHTML == "HTML") {
            htmlSpans.push(spans[i]);
        }
    }
    return htmlSpans;
}

function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签
    var lis = document.querySelector("#" + sectionId).querySelectorAll("li");
    var scLists = new Array();
    var scli;
    for (var i = 0; i < lis.length; i++){
        var spans = lis[i].querySelectorAll("span");
        for (var j = 0; j < spans.length; j++) {
            if (spans[j].innerHTML == spanCont) {
                scli = spans[j].parentNode;
                scLists.push(scli);
            }
        }
    }
    return scLists;
}

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    var actLinks = document.querySelector("#" + sectionId).querySelectorAll("a.active");
    var linksInner = new Array();
    for (var i = 0; i < actLinks.length; i++) {
        linksInner.push(actLinks[i].innerHTML);
    }
    return linksInner;
}

console.log(getAllListItem());
console.log(findAllHtmlSpanInOneSection("news-top"));
console.log(findAllHtmlSpanInOneSection("news-normal"));
console.log(findListItem("news-top", "JS"));
console.log(getActiveLinkContent("news-normal"));