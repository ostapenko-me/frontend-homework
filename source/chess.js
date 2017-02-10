'use strict';

const chess = function (num) {
    if (+num < 2) return null;

    var arr = Array.apply(null, Array(+num * +num))
        .map(function(item, i) {
            return ((i % +num + Math.floor(i / +num)) % 2 === 1 ) ? ' ' : '*';
        }).join('')
        .match(new RegExp('.{1,' + +num + '}', 'g'))
        .map(function(item) {return item + '\n'})
        .join('');
    return arr;
};