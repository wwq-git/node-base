var events=require("events");    
var http = require('http');    
function UserBean(){    
    this.eventEmit = new events.EventEmitter(); 
    this.zhuce=function(req,res){ 
        console.log("注册"); 
        req['uname']="aa"; 
        req['pwd']="bb"; 
        this.eventEmit.emit('zhuceSuc','aa','bb');  //抛出事件消息 
    }, 
    this.login=function(req,res){ 
        console.log("登录"); 
        res.write("用户名:"+req['uname']+"<br/>"); 
        res.write("密码:"+req['pwd']+"<br/>"); 
        res.write("登录"); 
    }    
}    
    
module.exports = UserBean; 
