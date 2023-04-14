const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const result=[...arr];
  if(result[0]=== '--double-prev'||result[0]==='--discard-prev') result.splice(0,1);
  if(result[result.length-1]=== '--double-next'||result[result.length-1]==='--discard-next') result.splice(result.length-1,1);
  result.forEach((item,i)=>{
    if(typeof item === 'string'){
      switch(item){
        case '--discard-next':{
          result.splice(i+1,1);
          break;
        }
        case('--discard-prev'):{
          result.splice(i-1,1);
          break;
        }
        case('--double-next'):{
          if(result[i]!=='discard-next') result[i] = result[i+1];
          break;
        }
        case('--double-prev'):{
          if(result[i]!=='discard-next') result[i]=result[i-1];
          break;
        }
      }
    }
  })
  return result.filter(item=>!(item === '--discard-prev' || item === '--discard-next'));
}

module.exports = {
  transform
};
