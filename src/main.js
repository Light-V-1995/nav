const $siteList = $(".siteList");
const $lastLi = $siteList.find(".last");
const x = localStorage.getItem("x");
const xObject = JSON.parse(x);
const hashMap = xObject || [
  { logo: "A", url: "https://www.acfun.cn" },
  { logo: "B", url: "https://www.bilibili.com" },
];

const simplifyUrl = (url) => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/\/.*/, "");
};
const render = () => {
  $siteList.find("li:not(.last)").remove();
  hashMap.forEach((node, index) => {
    const $Li = $(`<li>
          <div class="site">
              <div class="logo">${node.logo}</div>
              <div class="link">${simplifyUrl(node.url)}</div>
              <div class="close">
                <svg class="icon">
                <use xlink:href="#icon-close"></use>
                </svg>
              </div>
          </div>
    </li>`).insertBefore($lastLi);
    $Li.on("click", ".close", (e) => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render();
    });
    $Li.on("click", () => {
      window.open(node.url, "_self");
    });
  });
};
render();

$(".addSite").on("click", () => {
  const url = window.prompt("请输入要储存的网址：");
  let link = url;

  if (link.indexOf("http") !== 0) {
    link = "https://" + link;
  }
  hashMap.push({
    logo: simplifyUrl(url)[0],
    url: link,
  });
  render();
});

window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap);
  localStorage.setItem("x", string);
};
$(document).on("keypress", (e) => {
  const { key } = e;
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url, "_self");
    }
  }
});
