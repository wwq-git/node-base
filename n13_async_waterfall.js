// 串行有关联:waterfall      
// 每一步执行时需要由上一步执行的结果当做参数.所以每一步必须串行等待     

var async = require('async');   
function exec(){  
    async.waterfall([     
		function (done) {     
			done(null, 'one');     
		},     
		function (onearg, done) {     
			//done(null, onearg + '| two');     
			done('GoErr', onearg + '| two');     
		},     
		function (twoarg, done) {      
			done(null, twoarg + '| three');     
		},     
		function (threearg, done) {     
			done(null, threearg + '| four');     
		}     
	], function (error, result) {
		console.log(error);
		console.log(result);     
		//console.timeEnd('waterfall');     
	}); 
}  
exec(); 

function execTest(){ 
    async.waterfall( 
        [ 
            function(done){ 
                ii=0; 
                setInterval(function(){ 
                    console.log("aaa="+new Date()); 
                    ii++; 
                    if(ii==3){ 
                        clearInterval(this); 
                        done(null,'one完毕'); 
                    } 
                },1000); 
            }, 
            function(preValue,done){ 
                jj=0; 
                setInterval(function(){ 
                    console.log(preValue+"="+new Date()); 
                    jj++; 
                    if(jj==3){ 
                        clearInterval(this); 
                        done(null,preValue+',two完毕'); 
                    } 
                },1000); 
                 
            } 
        ],function(err,rs){ 
            console.log(err); 
            console.log(rs); 
        }     
    ) 
}
execTest();
