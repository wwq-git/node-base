// 3.直连mysql   
var mysql  = require('mysql');  //调用MySQL模块
//创建一个connection  
var connection = mysql.createConnection({      
    host: 'localhost',       //主机  
    user: 'root',               //MySQL认证用户名  
    password: '123456',        //MySQL认证用户密码  
    database: 'test',  
    port: '3306'                   //端口号  
});
//创建一个connection  
connection.connect(function(err){  
    if(err){         
        console.log('[query] - :'+err);  
        return;  
    }  
    console.log('[connection connect]  succeed!');  
}); 
//----插入
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['ccc','ccc'];
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log('insert err:',err.message);
        return;
    }
        console.log('insert success');
});
//执行查询  
connection.query('SELECT * from user ', function(err, rs) {  
//connection.query('SELECT * from user where uid=?',[2], function(err, rs) {  
    if (err) {  
        console.log('[query] - :'+err);  
        return;  
    } 
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname); 
    }
});   

//关闭connection  
connection.end(function(err){  
    if(err){ 
        console.log(err.toString());
        return;  
    }  
    console.log('[connection end] succeed!');  
}); 
