
function getQueryString(url,name)
{
	console.log(" ==>> url = " + url);
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     // var r = window.location.search.substr(1).match(reg);
     var r = url.substr(url.indexOf("?") + 1).match(reg);
	 console.log(JSON.stringify(r));
     if(r!=null)
    	 return  decodeURI(r[2]); 
     return null;
}
console.log(getQueryString("http://test-core.eqplaytech.com/open/gateway/getUserInfo?deviceID=1810081724&channelNum=7&bizID=1810081724-20181011111153","deviceID"));