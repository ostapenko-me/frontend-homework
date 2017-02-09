'use strict';

const max = function (numbers) {
	return Math.max(...numbers);
};

const plain = function (arr) {
	var plainArr = [];
	for(var i = 0; i < arr.length; i++) {
		plainArr = plainArr.concat(arr[i]);	
	}
	return plainArr;
};
