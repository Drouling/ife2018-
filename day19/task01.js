function getAllListItem() {
    // 返回页面中所有li标签
    var lis = document.getElementsByTagName("li");
    return lis;
}

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    var spans = document.getElementById(sectionId).getElementsByTagName("span");
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
    var section = document.getElementById(sectionId);
    var lis = section.getElementsByTagName("li");
    var scLists = new Array();
    var scli;
    for (var i = 0; i < lis.length; i++){
        var spans = lis[i].getElementsByTagName("span");
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
    var links = document.getElementById(sectionId).getElementsByTagName("a");
    var actLinks = new Array();
    for (var i = 0; i < links.length; i++) {
        if (links[i].className == "active") {
            actLinks.push(links[i].innerHTML);
        }
    }
    return actLinks;
}
console.log(getAllListItem());
console.log(findAllHtmlSpanInOneSection("news-top"));
console.log(findAllHtmlSpanInOneSection("news-normal"));
console.log(findListItem("news-top", "JS"));
console.log(getActiveLinkContent("news-normal"));