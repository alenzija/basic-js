const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result='';
  for(let i=0; i<str.length-1;i++){
    let count=1;
    while(str[i+1]===str[i]){
      count++;
      i++;
    }
    result+=count>1?`${count}${str[i]}`:`${str[i]}`;
  }
  if(result.slice(-1) !== str.slice(-1)) result+=str.slice(-1);
 return result;
}

module.exports = {
  encodeLine
};
