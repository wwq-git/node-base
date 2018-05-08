// parallelLimit函数和parallel类似，但是它多了一个参数limit。     
// limit参数限制任务只能同时并发一定数量，而不是无限制并发,     

/* async.parallelLimit([     
    function(callback){     
        callback(null, 'one');     
    },     
    function(callback){     
        callback(null, 'two');     
    }     
],     
2, //只允许同时有两个函数并行     
function(err, results){     
    console.log(results);     
});  */

var async = require('async');   
function exec(){  
    async.parallelLimit([     
		function(callback){ 
			ii=0;  
            setInterval(function(){  
                console.log('ii = ',ii,'; '+new Date());  
                ii++;  
                if(ii > 3){  
                    clearInterval(this);  
                    //done(null,{one:"one"});  
                    callback(null,{one:"one"});  
                }  
            },1000);      
		},     
		function(callback){     
			jj=0;  
            setInterval(function(){  
                console.log('jj = ',jj,'; '+new Date());  
                jj++;  
                if(jj>3){  
                    clearInterval(this);  
                    callback(null,{two:"two"});  
                }  
            },1000);     
		},
		function(callback){     
			kk=0;  
            setInterval(function(){  
                console.log('kk = ',kk,'; '+new Date());  
                kk++;  
                if(kk>3){  
                    clearInterval(this);  
                    callback(null,{two:"three"});  
                }  
            },1000);    
		}     
	],     
	2, //只允许同时有两个函数并行     
	function(err, results){     
		console.log(results);     
	});  
}  
exec(); 
