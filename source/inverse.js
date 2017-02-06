'use strict';

const inverse = function (array) {
    var inversed = [];
    if (array.length > 0) {
        inversed.push(array.shift());
        while (array.length != 0) {
            inversed.push(array.pop());
        }
    }
	return inversed;
};