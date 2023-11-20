/* 
  Game class

  Keeps track of game state, turns and active character
*/

import Character from './Character';

export default class Game {
  //public properties
  public activeCharacter: Character;
  public characters: Character[];
  public isGameOver: boolean;

  //private properties
  private _turn: number;

  //constructor
  constructor(characters: Character[]) {
    this._turn = 1;
    this.characters = this.sortCharactersBySpeed(characters);
    this.activeCharacter = this.characters[0];
    this.isGameOver = false;
  }

  //public methods
  public get turn() {
    return this._turn;
  }

  public nextActiveCharacter() {
    if (this.activeCharacter.hasActed) {
      const currentIndex = this.characters.indexOf(this.activeCharacter);
      if (currentIndex == this.characters.length - 1) {
        this.nextTurn();
        return;
      } else {
        this.activeCharacter = this.characters[currentIndex + 1];
      }
    }
  }

  public nextTurn() {
    this.characters.forEach((character) => {
      if (!character.hasActed) {
        return;
      }
    });
    this._turn++;
    this.activeCharacter = this.characters[0];
  }

  //private methods
  private sortCharactersBySpeed(characters: Character[]) {
    return characters.sort((a, b) => b.speed - a.speed);
  }
}
