'use strict';

const sortString = function (string) {
		let unicodeSort = (a, b) => a.localeCompare(b);

		return string.split(' ').map(function(word) {
			return word.split('').sort(unicodeSort).join('');
		}).sort(unicodeSort).join(' ');
};
