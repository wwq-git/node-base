
var http=require('http');
var options = {
  host: 'c.y.qq.com',
  port: 80,
  method: 'GET',
  path:'/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=48639460979987986&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=%E9%99%88%E7%B2%92&g_tk=5381&jsonpCallback=MusicJsonCallback6657007726461985&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0',
  timeout:3000
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error',function(e){
    console.log("error got :"+e.message);
}).on('timeout',function(e){

    console.log('timeout got :'+e.message);
});

req.end();
