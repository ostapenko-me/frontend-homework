'use strict';

const toUpperCase = function(inputString) {
	// регулярка \b[a-zа-я] не ищет начало слов на кириллице
	return inputString.toLowerCase().replace(/(?:^|\s|-)[a-zёа-я]/gm, function(str) {
		return str.toUpperCase();
	});
};
