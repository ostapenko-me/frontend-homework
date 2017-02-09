'use strict';

const numbers_dict = {"I" : 1 ,"IV" : 4 ,"V" : 5 ,"IX" : 9, "X" : 10," XL" : 40, "L" :50,"XC" : 90,"C" : 100,"CD" : 400 ,"D" : 500,"CM" : 900,"M" : 1000};

const fromRoman = function(roman){
    roman = roman.toUpperCase();
    let res =0;
    let prev = 0;
    for (let i = roman.length -1; i >= 0 ; i--){
        if(numbers_dict[roman[i]] < prev){
            res -= numbers_dict[roman[i]];
        } else{
            res += numbers_dict[roman[i]];
        }
        prev = numbers_dict[roman[i]];
    }
    return res;
};