'use strict';

const removeDuplicateLettersEnd = function (srcString) {
    let resultString = '';


    for (let i = 0; i < srcString.length; i++) {

        // если не найденно
        if ( !( ~srcString.indexOf(srcString[i], i + 1) ) ) {
            resultString += srcString[i];
        }

    }


    return resultString;
};
