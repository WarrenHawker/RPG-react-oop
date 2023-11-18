/* 
  Character base class
  Provides base for both Hero and Monster characters
*/

export default class Character {
  //private class properties
  #health: number;
  #image: string;
  #attack: number;
  #name: string;
  #isDead: boolean = false;

  constructor(health: number, image: string, attack: number, name: string) {
    this.#health = health;
    this.#image = image;
    this.#attack = attack;
    this.#name = name;
  }

  //getter methods for private properties
  get health() {
    return this.#health;
  }

  get image() {
    return this.#image;
  }

  get attack() {
    return this.#attack;
  }

  get name() {
    return this.#name;
  }

  get isDead() {
    return this.#isDead;
  }

  //setter methods for private properties
  set health(value) {
    this.#health = value;
  }

  set image(value) {
    this.#image = value;
  }

  set attack(value) {
    this.#attack = value;
  }

  set name(value) {
    this.#name = value;
  }

  set isDead(value) {
    this.#isDead = value;
  }
}
