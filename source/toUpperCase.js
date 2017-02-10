'use strict';

const toUpperCase = function (string) {
	function replacer(str) {
		return str.toUpperCase();
	}
	return string.toLowerCase().replace(/(?:^|\s)[a-zа-яё]/gm, replacer);
};
