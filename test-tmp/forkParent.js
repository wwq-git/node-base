var cp = require('child_process');

var child = cp.fork(__dirname+'/forkChild.js');//子进程

child.on('message', function(m) {
	console.log('父进程:'+JSON.stringify(m));
	//process.stdout.write(m.result.toString());
});

(function fiboLoop () {
  child.send({v:40});
  //cp.send({v:40});
  process.nextTick(fiboLoop);
})();

// var child_p = cp.fork(__dirname+'/child_print.js');//子进程
(function spinForever () {
  process.stdout.write(".");
  //child_p.send({v:'.'});
  process.nextTick(spinForever);
})();

