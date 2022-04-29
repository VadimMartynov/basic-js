const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  mas: [],
  str: '',
  getLength() {
    return this.mas.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) {
      
      this.mas.push('');
    } else {
    this.mas.push(value);
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.getLength()>position && position>0 && typeof(position) =='number') {
      this.mas.splice(position-1,1);
    } else {
      this.mas.length = 0;
      
      throw new Error("You can't remove incorrect link!");
    }
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.mas=this.mas.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let str='';
    for (let i=0;i<this.getLength();i++) {
      if (this.mas[i] === '') {
        str+= '( )~~'
      } else {
      str+= `( ${this.mas[i]} )~~`;
      }
    }
    this.mas.length = 0;
    return str.slice(0,-2);
    // remove line with error and write your code here
  }
};



module.exports = {
  chainMaker
};
