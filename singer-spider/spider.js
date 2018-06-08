var http = require('http');
var fs = require('fs');
var path = require('path');

function MusicJsonCallback6657007726461985(data) {
    console.log(data);
}

//https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=48639460979987986&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=%E9%99%88%E7%B2%92&g_tk=5381&jsonpCallback=MusicJsonCallback6657007726461985&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
http.get('http://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=48639460979987986&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=%E9%99%88%E7%B2%92&g_tk=5381&jsonpCallback=MusicJsonCallback6657007726461985&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0',function(req,res){  
    var html='';  
    req.on('data',function(data){  
        html+=data;  
    });  
    req.on('end',function(){  
        //console.info(html);
		//MusicJsonCallback6657007726461985(html);
		var jsondata= html.substring(html.indexOf('(')+1, html.length-1);
		//console.log(jsondata);
		var url = JSON.parse(jsondata).data.zhida.zhida_singer.singerPic;
		getImage(url,'陈粒.jpg');
    });  
});  

function getImage(url,singerName){
	console.log(typeof url)
	var obj = path.parse(url);
	var filename=obj.base;
	var writeStream = fs.createWriteStream('./pic/'+singerName);
	
	http.get(url,function(res){
		res.pipe(writeStream);
		console.log(filename+ '----->'+singerName +' ---->  读取完毕');
	});
}