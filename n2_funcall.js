var    http    =    require('http');    
var    otherfun    =    require('./models/otherfuns.js');      
http.createServer(function    (request,    response)    {      
        response.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});      
    if(request.url!=="/favicon.ico"){    //清除第2此访问  
        otherfun.controller(request,response);  
        var res=otherfun.add(1,2);
		console.log(res);
		
		funname  =  'getVisit';
        otherfun[funname](response);
        response.end('');    
    }  
}).listen(8000);      
console.log('Server    running    at    http://127.0.0.1:8000/');    
//---普通函数      
function  fun1(res){      
    res.write("你好,我是fun1");      
}  
