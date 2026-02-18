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
  
  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}