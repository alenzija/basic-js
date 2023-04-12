const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],
  getLength() {
    return this.values.length
  },
  addLink(value='') {
    if(value===null){
      this.values.push(value);
      return this; 
    }
    switch(typeof value){
      case 'boolean': {
        this.values.push(value);
        break;
      }
      case 'undefined':{
          this.values.push(value);
          break;
        } 
      case 'number':{
        this.values.push(value);
        break;
      }      
      default: {
    this.values.push(value.toString());}}
    return this; 
  },
  removeLink(position) {
    if(typeof position !== 'number' || Math.round(position) - position!==0 || position<=0 ||position> this.values.length){
      this.values=[];
      throw new Error("You can't remove incorrect link!");
    } else{
    this.values.splice(position-1,1);
    return this;
    }
  },
  reverseChain() {
    this.values = this.values.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.values.forEach(item=>{
      result+=`( ${item} )~~`
    })
    this.values =[];
    return result.slice(0,-2)
  }
};

//console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())
//console.log(chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain())

module.exports = {
  chainMaker
};
