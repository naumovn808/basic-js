const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  getLength() {
    return this.chain.length;
  },

  removeLink(position) {
    if (typeof position != 'number' || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
}

module.exports = {
  chainMaker
};
