'use strict';

const tree = function (height) {
	if (height < 3) {
        return null;
    }
	var answer = '';
    var spaces = height - 2;
    var stars = 1;
	for (let i = height; i > 1; i--) {
		answer += ' '.repeat(spaces);
		answer += '*'.repeat(stars);
        answer += ' '.repeat(spaces);
		answer += '\n';
		spaces -= 1;
		stars += 2;
	}
    spaces = height - 2;
	answer += ' '.repeat(spaces);
	answer += '|';
    answer += ' '.repeat(spaces);
    answer += '\n';
	return answer;
};
