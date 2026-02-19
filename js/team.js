import Character from './Сharacter.js';

export default class Team {
  constructor() {
    this.members = [];
  }
  
  add(character) {
    if (!(character instanceof Character)) {
      throw new Error('Можно добавлять только объекты класса Character');
    }
    this.members.push(character);
  }
  
  [Symbol.iterator]() {
      let step = 0;
      const max = this.members.length;
      const squad = this.members;
      
      const iterator = {
        next() {
          while (step < max) {
            step = step + 1;
            return { value: squad[step - 1], done: false };
          }
          return { done: true };
        }
      };
      
      return iterator;
    }
}