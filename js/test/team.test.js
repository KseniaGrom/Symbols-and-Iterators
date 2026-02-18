import Team from '../team.js';
import Character from '../Сharacter.js';

describe('Team class iterator', () => {
  let team;
  let archer;
  let swordsman;
  let mage;

  beforeEach(() => {
    team = new Team();
    
    archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
    swordsman = new Character('Мечник', 'Swordsman', 60, 1, 45, 15);
    mage = new Character('Маг', 'Magician', 40, 1, 50, 5);
    
    team.add(archer);
    team.add(swordsman);
    team.add(mage);
  });

  test('должен быть итерируемым с помощью for...of', () => {
    const characters = [];
    
    for (const character of team) {
      characters.push(character);
    }
    
    expect(characters).toHaveLength(3);
    expect(characters[0]).toBe(archer);
    expect(characters[1]).toBe(swordsman);
    expect(characters[2]).toBe(mage);
  });

  test('должен работать с оператором spread', () => {
    const characters = [...team];
    
    expect(characters).toHaveLength(3);
    expect(characters).toEqual([archer, swordsman, mage]);
  });

  test('должен работать с деструктуризацией', () => {
    const [first, second, third] = team;
    
    expect(first).toBe(archer);
    expect(second).toBe(swordsman);
    expect(third).toBe(mage);
  });

  test('должен работать с Array.from', () => {
    const characters = Array.from(team);
    
    expect(characters).toHaveLength(3);
    expect(characters).toEqual([archer, swordsman, mage]);
  });

  test('должен перебирать персонажей в правильном порядке', () => {
    const anotherTeam = new Team();
    anotherTeam.add(mage);
    anotherTeam.add(archer);
    
    const [first, second] = anotherTeam;
    
    expect(first).toBe(mage);
    expect(second).toBe(archer);
  });

  test('должен корректно обрабатывать пустую команду', () => {
    const emptyTeam = new Team();
    const characters = [...emptyTeam];
    
    expect(characters).toHaveLength(0);
  });

  test('должен проверять тип персонажа при добавлении', () => {
    const invalidTeam = new Team();
    
    expect(() => {
      invalidTeam.add({ name: 'Not a character' });
    }).toThrow('Можно добавлять только объекты класса Character');
  });
});