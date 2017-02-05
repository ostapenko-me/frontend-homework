/**
 * Created by maxim on 04.02.17.
 */
'use strict';


const twoNumbersNod = function (a, b) 
{
    while (a && b)
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
    if(arguments.length !== 3)
    {
        return;
    }
    var numbers = arguments;
    var nod = numbers[0];
    nod = twoNumbersNod(numbers[1], nod);
    nod = twoNumbersNod(numbers[2], nod);
    return nod;
};
