/*
	Кадырбеков Данияр АПО-21 вариант №15
*/

'use strict';

const zip = function () {
	var finalObject = {};

	for(var j = 0; arguments[j] != undefined; j++){
		for(var key in arguments[j]){
			if(finalObject[key] === undefined){
				finalObject[key] = arguments[j][key];
			}
		}
	}

	return finalObject;
};
