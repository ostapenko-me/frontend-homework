'use strict';

function sortString (string) {
	var words = string.split(" ");
	var chars;
	for (var i = 0; i < words.length; i++){
		chars = words[i].split("");
		chars = chars.sort(function (a, b) {
			return a.localeCompare(b);
		});
		words[i] = chars.join("");
	}
	words = words.sort(function (a, b) {
		return a.localeCompare(b);
	});

	string = words.join(" ");
	return string;
}