'use strict';

const removeDuplicateLettersEnd = function (string) {
	let resStr = "";

	for (var i = 0; i < string.length; i++) {
		let j = i + 1;
		for (; j < string.length && string[j] !== string[i]; j++);
		if (j === string.length)
			resStr += string[i];
	}

	return resStr;
};
