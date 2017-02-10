'use strict';

const removeDuplicateLettersBegin = function (input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (output.indexOf(input[i]) === -1) {
            output += input[i];
        }
    }
    return output;
};
