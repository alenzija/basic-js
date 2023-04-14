const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const LATIN_SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 

class VigenereCipheringMachine {
  constructor(isDirect=true, symbols=LATIN_SYMBOLS){
    this.isDirect = isDirect;
    this.symbols = symbols;    
  }

  checkArguments(message,key){
    if(typeof message !== 'string' || typeof key !=='string') throw new Error('Incorrect arguments!');
  }

  buildKey(message,key){
    let newKey='';
    let j=0;
    for(let i=0;i<message.length;i++){
      if(this.symbols.indexOf(message[i])>=0){newKey+=key[j%key.length];j++}
      else newKey+=' ';
    }
    return newKey;
  }

  encrypt(message,key) {
    this.checkArguments(message,key);
    message=message.toUpperCase();
    key=this.buildKey(message,key.toUpperCase());    
    let result ='';
    for(let i=0;i<message.length;i++){
      if(this.symbols.indexOf(message[i])===-1){ result+=message[i]} else
      result+= this.symbols[(this.symbols.indexOf(message[i])+this.symbols.indexOf(key[i]))%this.symbols.length];
    }
      return this.isDirect? result: result.split('').reverse().join('');
  }

  decrypt(message,key){
    this.checkArguments(message,key);
    message=message.toUpperCase();
    key=this.buildKey(message,key.toUpperCase());    
    let result ='';
    for(let i=0;i<message.length;i++){
      if(this.symbols.indexOf(message[i])===-1){ result+=message[i]} else
      result+= this.symbols[(this.symbols.length+this.symbols.indexOf(message[i])-this.symbols.indexOf(key[i]))%this.symbols.length];
    }
      return this.isDirect? result: result.split('').reverse().join('');
  }
}


const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))// => 'AEIHQX SX DLLU!'

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => 'ATTACK AT DAWN!'

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))// => '!ULLD XS XQHIEA'

console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => '!NWAD TA KCATTA'


module.exports = {
  VigenereCipheringMachine
};
