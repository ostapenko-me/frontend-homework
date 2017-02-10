'use strict';

const removeDuplicateLettersBegin = function (input) {
	var output = '';
	for (var i = 0; i < input.length; i++) {
    if (output.indexOf(input[i]) == -1) {
      output += input[i];
    }
  }
  return output;
};
