const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const objCount={};
  for(let i=0; i<s1.length;i++){
    if(s1[i] in objCount){ objCount[s1[i]][0]++}
    else {
      objCount[s1[i]]=[0,0];
      objCount[s1[i]][0]=1;
  }}
  for(let i=0; i<s2.length;i++){
    if(s2[i] in objCount){ objCount[s2[i]][1]++}
    else {
      objCount[s2[i]]=[0,0];
      objCount[s2[i]][1]=1;
  }}
  let sum=0;
  for (key in objCount){
    sum+=Math.min(...objCount[key])
  }
  return sum;  
}

module.exports = {
  getCommonCharacterCount
}
