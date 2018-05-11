var async = require('async');
var  optfile  =  require('./models/optfile');
var pushTask = function(name) { 
	q.push(name, function(cb) {
		console.log('running: ' + name); 
	}, function(err){
		console.log('finished: ' + name); 
	}); 
}
var wait = function(mils) { 
	var now = new Date; 
	while(new Date - now <= mils) ; 
}
var q = async.queue(function(name, task, callback) { 
	console.log('processing task: ' + name); 
	task(callback); 
}, 3);

function getRecall(){
  function recall(data){
    console.log('##########',data.toString());
  }
  return recall;
}
recall = getRecall();
optfile.readfile("./testReadFile.txt",recall);

pushTask('t1'); 
pushTask('t2'); 
pushTask('t3');
pushTask('t4'); 

// console.log('waited 100ms'); 
// wait(100); 
pushTask('t5'); 
pushTask('t6'); 
pushTask('t7');
pushTask('t8'); 

// console.log('waited 1000ms');  
// wait(10000);
