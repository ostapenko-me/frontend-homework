'use strict';

function sortString (string) {
	return string.split(" ").map( (item, i, arr) => item.split("").sort( (a, b) => a.localeCompare(b) ).join("") ).sort( (a, b) => a.localeCompare(b) ).join(" ");
}