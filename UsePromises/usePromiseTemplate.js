function mapAsync(iterator, obj, context) {
	var result = obj.map(iterator);
	return Promise.all(result);
};


function mapAsyncWithOrder(iterator, array, context, descending) {
	var initialValue = Promise.resolve([]);
	if (!Array.isArray(array)) {
		return initialValue;
	}

	iterator = iterator.bind(context);
	var inOrder = function (prevValue, NextValue, nextIndex, array) {
		return prevValue.then(function (items) {
			return iterator(NextValue, nextIndex, array).then(function (moreItems) {
				return items.concat(moreItems);
			});
		});
	}
	if (descending) {
		return array.reduceRight(inOrder, initialValue);
	}
	return array.reduce(inOrder, initialValue);
}

function mapAsyncInOrder(iterator, array, context) {

	return mapAsyncWithOrder(iterator, array, context);


};

function mapAsyncInDescendingOrder(iterator, array, context) {

	return mapAsyncWithOrder(iterator, array, context, true);
};









// function mapAsync(iterator, obj, context) {
// 	var data = obj.map(iterator);
// 	return Promise.all(data);
// };

// function mapAsyncWithOrder (iterator, array, context, descending){
// 	var initValue = Promise.resolve([]);
// 	if (!Array.isArray(array)){
// 		return initValue;
// 	}
// 	iterator = iterator.bind(context);
// 	var inOrder = function(prevValue, nextValue, nextIndex, array){
// 		return prevValue.then(function(items){
// 			return iterator (nextValue, nextIndex, array).then(function(moreItems){
// 				return items.concat(moreItems)});
// 		});
// 	}
// 	if (descending){
// 		return array.reduceRight(inOrder, initValue);
// 	}
// 	return array.reduce(inOrder, initValue);
// };


// function mapAsyncInOrder(iterator, array, context) {
// 	return mapAsyncInOrder(iterator, array, context);
// };

// function mapAsyncInDescendingOrder(iterator, array, context) {
// 	return mapAsyncInDescendingOrder(iterator, array, context, true);
// };










		// var data = array.map(iterator);
	// function numberDes(a,b){
	// 	return b-a;
	// }
	// var reverse = data.sort(function (a,b){
	// 	return b-a
	// });
	//return Promise.all(data.sort(numberDes));


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