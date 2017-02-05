'use strict';

const max = function (numbers) {
	return Math.max(...numbers);
};

const fromHex = function (hexString) {
	let binString = parseInt(hexString, 16).toString(2);
	return `${binString}b`;
};
