'use strict';

const sortString = str => {
  const stringCompare = (lhs, rhs) => lhs.localeCompare(rhs);
  
  let words = str.split(' ');
  let sortedWords = words.map( word => {
  	return word.split('').sort(stringCompare).join('');
  });
  return sortedWords.sort(stringCompare).join(' ');
};
