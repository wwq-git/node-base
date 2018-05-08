// 并行无关联：async.parallel(tasks,callback);     
// 多个函数并行执行，最后汇总结果,如果某一个流程出错就退出(取消另一个的回调) 

var async = require('async');   
function exec(){  
    async.parallel({   
        one: function(done){  
            ii=0;  
            setInterval(function(){  
                console.log('ii = ',ii,'; '+new Date());  
                ii++;  
                if(ii >= 2){  
                    clearInterval(this);  
                    //done(null,{one:"one"});  
                    done('ERR',{one:"one"});  
                }  
            },1000);  
        },  
        two: function(done){  
            jj=0;  
            setInterval(function(){  
                console.log('jj = ',jj,'; '+new Date());  
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
