module.exports={ 
	controller:function(req,res){      
    //res.write("发送");      
    console.log('call');        
	},  
    getVisit:function(res){
		res.write('visFun');
    },      
    add:function(a,b){      
    return  a+b;      
    }      
} 
