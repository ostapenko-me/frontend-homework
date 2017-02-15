'use strict';

const plain = function (arrays) {
	var resultArray = []; 
	
	for (var i = 0; i < arrays.length; i++) {
		if (!Array.isArray(arrays[i])) {
			resultArray.push(arrays[i]);
		} else {
			resultArray=resultArray.concat(plain(arrays[i]));
		}
	}
	return resultArray;
};