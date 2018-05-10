var cp = require('child_process');
function fibo (n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

process.on('message', function(m) {
	//process.stdout.write('子进程:'+JSON.stringify(m));
	var res = fibo(m.v);
	process.stdout.write(""+res);
	//process.send({result:res});
});

