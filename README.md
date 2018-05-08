## 异步流程

先安装： 
    
G:\www\nodejs\study>npm install async --g     
G:\www\nodejs\study>npm install -g async 

如果提示 async 未识别
添加环境变量 NODE_PATH 值为 全局模块路径 例如： 
D:\xxx\nodejs\node_global\node_modules

1.串行无关联：async.series(tasks,callback);     
多个函数依次执行,之间没有数据交换,其中一个函数出错，后续函数不再执行

2.并行无关联：async.parallel(tasks,callback);     
多个函数并行执行，最后汇总结果,如果某一个流程出错就退出  

3.串行有关联:waterfall      
每一步执行时需要由上一步执行的结果当做参数.所以每一步必须串行等待    

4.parallelLimit(tasks, limit, [callback])     
parallelLimit函数和parallel类似，但是它多了一个参数limit。     
limit参数限制任务只能同时并发一定数量，而不是无限制并发, 
     
```
async.series({     
    one: function(callback){     
        callback(null, 1);     
    },     
    two: function(callback){     
        callback(null, 2);     
    }     
},function(err, results) {     
    console.log(results);     
}); 
```
## 连接MySQL
1.安装mysql支持 

> npm install mysql -g 
> cnpm install mysql -g

2.建表
```
create table user(  
uid int not null primary key auto_increment,  
uname varchar(100) not null,  
pwd varchar(100) not null   
)ENGINE=InnoDB DEFAULT CHARSET=utf8; 
```
  