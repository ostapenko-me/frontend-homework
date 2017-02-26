'use strict';

const union = function (numbers) {
    let arr = [];
    for (let i  =0; i< arguments.length; i++){
        arr = arr.concat(arguments[i])
    }
    return Array.from(new Set(arr));

};