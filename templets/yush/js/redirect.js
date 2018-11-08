var userAgentInfo = navigator.userAgent.toLowerCase();
var Agents = ["android", "iphone",
                "symbianos", "windows phone",
                "ipad", "ipod"];
var ly=document.referrer;  //返回导航到当前网页的超链接所在网页的URL

for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) >= 0&&(ly==""||ly==null)) {
         this.location.href='http://m.yushpet.com/index.html';  //wap端地址
    }
}
