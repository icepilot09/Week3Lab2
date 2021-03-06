var APromise = {};

APromise.all = function (promises) {
	var promise = Promise.resolve();
	Promise.all([true, promise])
		.then(function(values){
			return(values)
		});
	try {
		return Promise.resolve(promises);
		} catch (e) {
		return Promise.reject(e);
		}
	};


APromise.race = function (promises) {
  	return new Promise(function (resolve, reject) {
    	promises.forEach(function(value){
      		Promise.resolve(value).then(resolve, reject);
    		});
  		});
	};

APromise.resolve = function (value) {
    return Promise.resolve(value);
	};

APromise.reject = function (err) {
    return Promise.reject(err);
	};

module.exports.APromise = APromise;





// var APromise = {};

// APromise.all = function (promises) {
//     return Promise.all(promises);
// 	};

// APromise.race = function (promises) {
//     return Promise.race(promises);
// 	};

// APromise.resolve = function (value) {
//     return Promise.resolve(value);
// 	};

// APromise.reject = function (err) {
//     return Promise.reject(err);
// 	};








// var APromise = {};

// APromise.all = function(promises){};

// APromise.race = function(promises){};

// APromise.resolve = function(value){
// 	var promiseForValue = Promise.resolve(value);
// 	return promiseForValue;
// };

// APromise.reject = function(err){
// 	var rejectedPromise = Promise.reject(new Error('Whatever'));
// 	return rejectedPromise;
// };
