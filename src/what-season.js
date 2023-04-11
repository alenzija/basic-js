const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// console.log(getSeason(new Date(2020, 02, 31))) //=> 'spring'
// console.log(getSeason('fdfd'))
 
function checkFakeDate(date) {
  // const dateForCheck = new Date(date)
  // dateForCheck.setDate(dateForCheck.getDate() + 1);
  // let isFake = date.getDate === dateForCheck.getDate();

  

  return +(new Date(date)) !== +date
}

function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (isNaN(Date.parse(date))) throw new Error('Invalid date!');
  try{
    +date;
    const month = date.getMonth();
    if(month>1 && month<5){
      return 'spring';
    } else if(month>=5 && month<8){
      return 'summer';
    } else if (month>=8 && month<11){
      return 'autumn';
    } else if(month>=0 && month<2 || month===11) {
      return 'winter';
    } else throw new Error('Invalid date!')}
  catch(e) {
    throw new Error('Invalid date!')
  };
}

module.exports = {
  getSeason
};

