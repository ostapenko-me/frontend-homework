'use strict';

const removeDuplicateLettersEnd = function (string) {
	var resStr = "";

	for (var i = 0; i < string.length; i++) {
		var j = i + 1;
		for (; j < string.length && string[j] != string[i]; j++);
		if (j == string.length)
			resStr += string[i];
	}

	return resStr;
};
