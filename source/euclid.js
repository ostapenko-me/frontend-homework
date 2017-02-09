'use strict';
//  Артюхов Влад АПО-21
const euclid = function (a, b, c) {
    function NOD(x, y) {
        while (x && y) {
            x > y ? x %= y : y %= x;
        }
        x += y;
        return x;
    }
    return NOD(a, NOD(b, c));
};
