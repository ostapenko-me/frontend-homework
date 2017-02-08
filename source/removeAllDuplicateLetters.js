'use strict';

const removeAllDuplicateLetters = function (myString) {
	var charSet = new Set();
	var result = myString;
	for(var i = 0; i < myString.length; i++) {
		if(!charSet.has(myString[i])) {
			charSet.add(myString[i]);
		} else {
			result = result.replace(new RegExp(myString[i], 'gi'), "");
		}
	}
	return result;
};