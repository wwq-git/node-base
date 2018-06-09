var http = require('http');
var fs = require('fs');
var path = require('path');
const readline = require('readline');
var pinyin = require("node-pinyin");

function logErr(singerName){
	err += (singerName +',');
}

function cn2pinyin(cn){
	var res ='';
	var singerArr = pinyin(cn,{ style: 'normal'});
	for(var j = 0; j < singerArr.length; j++){
		res += singerArr[j].toString().substring(0,1).toUpperCase();
	}
	return res +'-';
}

function buildPicUrl(html){
	var jsondata= html.substring(html.indexOf('(')+1, html.length-1);
	//console.log(jsondata);
	if(JSON.parse(jsondata).code != 0||JSON.parse(jsondata).subcode != 0){
		logErr(singerName);
		return;
	}
	var url = '';
	try {
		url = JSON.parse(jsondata).data.zhida.zhida_singer.singerPic;
	} catch (err) {
		logErr(singerName);
	}
	return url;
}

function getSingerJSONPinfo(path){
	var options = {
	  host: 'c.y.qq.com',
	  port: 80,
	  method: 'GET',
	  path:path,
	  timeout:30000
	};

	var resultData='';
	var req = http.request(options, function(res) {
	  //console.log('STATUS: ' + res.statusCode);
	  //console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.on('data', function (chunk) {
		resultData += chunk;
		//console.log('BODY: ' + chunk); 
	  });
	});

	req.on('end',function(){ 
		  console.log(resultData);
	});
	req.on('error',function(e){
		console.log("error got :"+e.message);
	}).on('timeout',function(e){

		console.log('timeout got :'+e.message);
	});

	req.end();
	return resultData;
}

function getWeb(singerName){
	var webUrl='http://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=48639460979987986&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w='+encodeURI(singerName)+'&g_tk=5381&jsonpCallback=MusicJsonCallback6657007726461985&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0';
	http.get(webUrl,function(req,res){  
		var html='';  
		req.on('data',function(data){  
			html+=data;  
		});  
		req.on('end',function(){  
			var jsondata= html.substring(html.indexOf('(')+1, html.length-1);
			//console.log(jsondata);
			if(JSON.parse(jsondata).code != 0||JSON.parse(jsondata).subcode != 0){
				logErr(singerName);
				return;
			}
			var url = '';
			try {
				url = JSON.parse(jsondata).data.zhida.zhida_singer.singerPic;
			} catch (err) {
				logErr(singerName);
			}
			
			//console.log(singerName);
			if(url == undefined || url.length === 0){
				logErr(singerName);
				//process.exit(0);
				return ;
			}
			//getImage(url,singerName);
		});
		req.on("error",function(err){
			console.log("err -----> "+err.message);
		});
		req.on("end",function(data){
			//console.log("end -----> "+data);
		});
	});  
}

function getImage(url,singerName){
	var picSuffix = url.substring(url.lastIndexOf('\.'));
	// var obj = path.parse(url);
	// var filename=obj.base;
	var writeStream = fs.createWriteStream('./pic/'+cn2pinyin(singerName)+singerName+picSuffix);
	
	http.get(url,function(res){
		res.pipe(writeStream);
		console.log(filename+ '----->'+singerName +' ---->  读取完毕');
	});
}

var antReadline = readline.createInterface({
    input: fs.createReadStream("./singers.txt")
});

var i = 1;
var err ='';
antReadline.on('line', (line) => {
    //console.log(  i + "  ======> " + line);
	if(line.length > 0){
		try {
			//getWeb(line);
			var path ='http://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=48639460979987986&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w='+encodeURI(line)+'&g_tk=5381&jsonpCallback=MusicJsonCallback6657007726461985&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0';
			var singerInfo = getSingerJSONPinfo(path);
			//console.log(singerInfo);
		} catch (err) {
			console.log(err);
			console.log(line);
			logErr(singerName);
		}
	}
	i += 1;
});
//antReadline.close();
console.log(err);
