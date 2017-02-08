'use strict';

const removeAllDuplicateLetters = function (myString) {
	let charSet = new Set();
	let result = myString;
	for(let i = 0; i < myString.length; i++) {
		if(!charSet.has(myString[i])) {
			charSet.add(myString[i]);
		} else {
			result = result.replace(new RegExp(myString[i], 'gi'), '');
		}
	}
	return result;
};

