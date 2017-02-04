'use strict';

function unicodeSort(a, b) {
	return a.localeCompare(b);
}

const sortString = function (string) {
	// var words = string.split(' ');
	// var sortedWords = words.map(function(word) {
	// 	return word.split('').sort(unicodeSort).join('');
	// })
	// return sortedWords.sort(unicodeSort).join(' ');


  // В одну строчку
		return string.split(' ').map(function(word) {
			return word.split('').sort(unicodeSort).join('');
		}).sort(unicodeSort).join(' ');
};
