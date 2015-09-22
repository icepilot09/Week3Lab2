var q = require('q');
var def1 = q.defer();
var def2 = q.defer();

function all(promise1, promise2){
	var def3 = q.defer();
	var counter = 0, val1, val2;
 
 promise1
 .then (function(result){
	 val1 = result;
	 ++counter;
	 if (counter >= 2) def3.resolve([val1,val2]); 
   })
	 .then(null, def3.reject)
	 .done();
	 
promise2
 .then (function(result){
	 val2 = result;
	 ++counter;
	 if (counter >= 2) def3.resolve([val1,val2]); 
   })
	 .then(null, def3.reject)
	 .done();
 
return def3.promise;
}

all(def1.promise, def2.promise)
.then(console.log)
.done();

setTimeout(function(){
	def1.resolve("PROMISES");
	def2.resolve("FTW");
}, 200);