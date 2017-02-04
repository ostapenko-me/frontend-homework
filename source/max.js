'use strict';

const max = function (numbers) {
	return Math.max(...numbers);
};

const fromHex = function (hexString) {
	return parseInt(hexString, 16).toString(2) + 'b';
};
