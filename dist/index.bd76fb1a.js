(function () {
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $(".siteList");
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find(".last");
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem("x");
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [
    {
        logo: "A",
        url: "https://www.acfun.cn"
    },
    {
        logo: "B",
        url: "https://www.bilibili.com"
    }, 
];
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = (url)=>{
    return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(/\/.*/, "");
};
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = ()=>{
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find("li:not(.last)").remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index)=>{
        const $Li = $(`<li>\n          <div class="site">\n              <div class="logo">${node.logo}</div>\n              <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>\n              <div class="close">\n                <svg class="icon">\n                <use xlink:href="#icon-close"></use>\n                </svg>\n              </div>\n          </div>\n    </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
        $Li.on("click", ".close", (e)=>{
            e.stopPropagation();
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
        });
        $Li.on("click", ()=>{
            window.open(node.url, "_self");
        });
    });
};
$16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
$(".addSite").on("click", ()=>{
    const url = window.prompt("请输入要储存的网址：");
    let link = url;
    if (link.indexOf("http") !== 0) link = "https://" + link;
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
        logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)[0],
        url: link
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem("x", string);
};
$(document).on("keypress", (e)=>{
    const { key: key  } = e;
    for(let i = 0; i < $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.length; i++)if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].logo.toLowerCase() === key) window.open($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].url, "_self");
});

})();
//# sourceMappingURL=index.bd76fb1a.js.map
