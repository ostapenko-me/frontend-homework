'use strict';

const fromHex = function (hexStr) {
	return parseInt(hexStr, 16).toString(2)+'b';
};
