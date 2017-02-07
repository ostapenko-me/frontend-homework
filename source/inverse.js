'use strict';

const inverse = function (array) {
    let inversed = array;
    if (inversed.length) {
        inversed.reverse().unshift(inversed.pop());
    }
    return inversed;
};
