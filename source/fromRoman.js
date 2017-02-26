/**
 * Created by pacman29 on 10.02.17.
 */
'use strict';
function fromRoman(val) {

    let roman = {
        'i': 1,
        'v': 5,
        'x': 10,
        'l': 50,
        'c': 100,
        'd': 500,
        'm': 1000
    };
    let result = roman[val[0].toLowerCase()];
    val.toLowerCase().split("").reduce((previous,current) => {
        let p = roman[previous];
        let c = roman[current];
        result += (p<c) ? (c-2*p ) : (c);
        return current;
    });

    return result;
}
