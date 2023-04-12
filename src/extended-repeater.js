const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options = {...{repeatTimes:1, separator:'+', additionRepeatTimes:1, additionSeparator:'|', addition:''},...options}
  let result='';
  let addStr='';
  for(let i=0;i<options.additionRepeatTimes;i++){
    addStr+=`${options.addition}${options.additionSeparator}`;
  }
  addStr = addStr.slice(0,-options.additionSeparator.length);
  for(let i=0;i<options.repeatTimes;i++){
    result+=`${str}${addStr}${options.separator}`;
  }

  return result.slice(0,-options.separator.length);
}

module.exports = {
  repeater
};
