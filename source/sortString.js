'use strict';

const sortString = (str) => {
  let words = str.split(' ');
  for (let i in words) {
    words[i] = words[i].split('').sort(stringCompare).join('');
  }
  return words.sort(stringCompare).join(' ');
};

const stringCompare = (lhs, rhs) => {
  return lhs.localeCompare(rhs);
}