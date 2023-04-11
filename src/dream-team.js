const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * *
 */
// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])) //=> 'ADMM'
//  console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])) //=> 'LOO'
 
function createDreamTeam(members) {
  let result=[];
  if(Array.isArray(members)) members.forEach(item=>{
    if(typeof item === 'string') result.push(item.trim().toUpperCase()[0])
  });
  return result.length>0?result.sort().join(''):false;
}

module.exports = {
  createDreamTeam
};
