'use strict';

const inverse = function (array) {
    var inversed = array;
    if (inversed.length != 0) {
        inversed.reverse();
        inversed.unshift(inversed.pop());
    }
	return inversed;
};