'use strict';


const removeAllDuplicateLetters = function (str) {    
    var result = '';    
    for (var i = 0; i < str.length; ++i) {
        var letter = str[i];
		var count =0;
		for(var j = 0; j<str.length; ++j){
			if (letter.toLowerCase() == str[j]||letter.toUpperCase() == str[j]) {
				count++;
			}
			if(count>1){
				break;
			}
		}
		if(count==1){
			result+=str[i];
		}        
    }    
    return result;
};