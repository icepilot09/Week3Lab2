function mapAsync(iterator, obj, context) {
	var data = obj.map(iterator);
	return Promise.all(data);
};

function mapAsyncInOrder(iterator, array, context) {
	var data = array.map(iterator);
	return Promise.all(data);
};

function mapAsyncInDescendingOrder(iterator, array, context) {
	var data = array.map(iterator);
	// var reverse = data.sort(function (a,b){
	// 	return b-a
	// });
	return Promise.all(data);
	
};

// function mapAsync(iterator, obj, context) {
// 		var arr = [];
// 		for (var i = 0; i < obj.length; i++) {
// 			var collect = iterator.call(context, obj[i],i,obj);
// 			arr.push(collect);
// 		}
// 		return Promise.all(arr)
// };

// function mapAsyncInOrder(iterator, array, context) {
// 		var arr = [];
// 		for (var i = 0; i < array.length; i++) {
// 			var collect = iterator.call(context, array[i],i,array);
// 			arr.push(collect);
// 		}
// 		return Promise.all(arr)
// };

// function mapAsyncInDescendingOrder(iterator, array, context) {
// 		var arr = [];
// 		var reverse = arr.sort(function (a,b){
// 		return b-a
// 		});
// 		for (var i = 0; i < array.length; i++) {
// 			var collect = iterator.call(context, array[i],i,array);
// 			arr.push(collect);
// 		}
// 		return Promise.all(reverse)
// };