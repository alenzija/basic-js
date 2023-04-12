const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const arrOfResults = [];
  for(let i=0;i<arr.length;i++){
    let newArr = [...arr];
    newArr.splice(i,1)
    arrOfResults.push(+newArr.join(''))
  }
  return Math.max(...arrOfResults);
}

module.exports = {
  deleteDigit
};
