//交叉执行  
function oneFun() 
{ 
    /* 
    setTimeout(function(){ 
 
    },1000); 
    */ 
    ii=0; 
    setInterval(function(){ 
        console.log("aaa="+new Date()); 
        ii++; 
        if(ii==3){ 
            clearInterval(this); 
        } 
    },1000); 
    console.log("oneFun"); 
} 
function twoFun() 
{ 
    jj=0; 
    setInterval(function(){ 
        console.log("bbb="+new Date()); 
        jj++; 
        if(jj==3){ 
            clearInterval(this); 
        } 
    },1000); 
    console.log("twoFun"); 
}  
    
oneFun(0);
console.log("oneFun执行");    
twoFun();  
console.log("twoFun执行");   
console.log("主进程执行完毕"); 

var async = require('async');   
function exec(){  
    async.series({   
        one: function(done){  
            ii=0;  
            setInterval(function(){  
                console.log('AAA='+new Date());  
				console.log('AAA ii =',ii);
                ii++;  
                if(ii==6){  
                    clearInterval(this);  
                    //done(null,{one:"one"});  
                    done('ERR',{one:"one"});  
                }  
            },1000);  
        },  
        two: function(done){  
            jj=0;  
            setInterval(function(){  
                console.log('BBB='+new Date()); 
				console.log('BBB jj ='+jj);
                jj++;  
                if(jj>3){  
                    clearInterval(this);  
                    done(null,{two:"two"});  
                }  
            },1000);  
        }  
    },function(err,rs) {   
		console.log(err);  
		console.log(rs);  
	});  
}  
exec();   
