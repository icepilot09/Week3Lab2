var APromise = {};

APromise.all = function(promises){};

APromise.race = function(promises){
	function timeout(promise) {
  return Promise.race([promise.then(function () {
    throw new Error('Operation timed out');
  })]);
}
};

APromise.resolve = function(value){
	var promiseForValue = Promise.resolve(value);
	return promiseForValue;
};

APromise.reject = function(err){
	var rejectedPromise = Promise.reject(new Error('Whatever'));
	return rejectedPromise;
};

module.exports.APromise = APromise;
