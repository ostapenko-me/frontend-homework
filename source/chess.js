'use strict';

const chess = function (num) {
    if (+num < 2) return;

    let arr = Array.apply(null, Array(+num * +num))
        .map((item, i) => ((i % +num + Math.floor(i / +num)) % 2 === 1 ) ? ' ' : '*')
        .join('')
        .match(new RegExp(`.{1,${+num}}`, `g`))
        .map(item => item + '\n')
        .join('');
    return arr;
};
