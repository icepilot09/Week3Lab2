var APromise = {};

APromise.all = function (promises) {
    return Promise.all(promises);
	};

APromise.race = function (promises) {
    return Promise.race(promises);
	};

APromise.resolve = function (value) {
    return Promise.resolve(value);
	};

APromise.reject = function (err) {
    return Promise.reject(err);
	};








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

// module.exports.APromise = APromise;
