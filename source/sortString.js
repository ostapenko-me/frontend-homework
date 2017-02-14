'use strict';

const sortString = str => {
  let words = str.split(' ');
  let sortedWords = words.map( word => {
  	return word.split('').sort(stringCompare).join('');
  });
  return sortedWords.sort(stringCompare).join(' ');
};

const stringCompare = (lhs, rhs) => lhs.localeCompare(rhs);
