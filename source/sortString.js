'use strict';

function sortString (string) {
	let words = string.split(" ");
	let chars;
	for (let i = 0; i < words.length; i++){
		chars = words[i].split("");
		chars = chars.sort( (a, b) => a.localeCompare(b) );
		words[i] = chars.join("");
	}
	words = words.sort( (a, b) => a.localeCompare(b) );
	string = words.join(" ");
	return string;
}