function fibo (n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

var numThreads= 10;
var threadPool= require('threads_a_gogo').createPool(numThreads).all.eval(fibo);

threadPool.all.eval('fibo(40)', function cb (err, data) {
  process.stdout.write(" ["+ this.id+ "]"+ data);
  this.eval('fibo(40)', cb);
});

(function spinForever () {
  process.stdout.write(".");
  process.nextTick(spinForever);
})();

//加载tagg2的模块
var tagg = require('tagg2'); 

//子线程工作函数
var th_func = function(){
	var fibo =function fibo (n) {
     		 return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
    	}
	thread.end(fibo(40));
}

//创建子线程,并且注册回调
var thread = tagg.create(th_func, function(err, res){
	if(err) throw new(err);//如果在线程中throw异常，err就会得到相应的错误
	console.log(res);//fibo(40)的结果
	thread.destroy();//摧毁线程
});
