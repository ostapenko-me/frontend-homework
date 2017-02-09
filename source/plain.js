'use strict';

let plain = arr => {
	let plainArr = [];
	arr.forEach( (element) => {plainArr = plainArr.concat(element)} );
	return plainArr;
};
