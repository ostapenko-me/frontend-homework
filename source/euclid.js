/**
 * Created by maxim on 04.02.17.
 */
'use strict';


const two_numbers_nod = function (a, b) {
    while (a != 0 && b != 0)
    {
        if (a > b)
        {
            a = a % b;
        }
        else
        {
            b = b % a;
        }
    }
    return Math.max(a, b);
};

const euclid = function ()
{
    if(arguments.length != 3)
    {
        return ;
    }
    var numbers = arguments;
    var nod = numbers[0];
    nod = two_numbers_nod(numbers[1], nod);
    nod = two_numbers_nod(numbers[2], nod);
    return nod;
};
