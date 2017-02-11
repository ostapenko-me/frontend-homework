/*
	Кадырбеков Данияр АПО-21 вариант №15
*/
'use strict';
const zip = (...rest) => {
	var finalObject = {};
	rest.forEach(function(item){
		for(var key in item){
			if(finalObject[key] === undefined){
				finalObject[key] = item[key];
			}
		}
	});
	return finalObject;
}
