## 异步流程

先安装： 
    
G:\www\nodejs\study>npm install async --g     
G:\www\nodejs\study>npm install -g async 

如果提示 async 未识别
添加环境变量 NODE_PATH 值为 全局模块路径 例如： 
D:\xxx\nodejs\node_global\node_modules

1.串行无关联：async.series(tasks,callback);     
多个函数依次执行,之间没有数据交换,其中一个函数出错，后续函数不再执行     
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
