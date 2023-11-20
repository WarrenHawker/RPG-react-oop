/* 
  Character base class
  Provides base for both Hero and Monster characters
*/

export type CharacterType = 'hero' | 'monster';
import { nanoid } from 'nanoid';

export default class Character {
  //public properties
  public id: string;
  public maxHealth: number;
  public attack: number;
  public type: CharacterType;
  public hasActed: boolean;
  public name: string;
  public speed: number;
  public target: string | null;

  //private properties
  private _isDead: boolean;
  public _currentHealth: number;

  //constructor
  constructor(
    name: string,
    type: CharacterType,
    health: number,
    attack: number,
    speed: number
  ) {
    this.id = nanoid();
    this.name = name;
    this.maxHealth = health;
    this._currentHealth = health;
    this._isDead = false;
    this.type = type;
    this.attack = attack;
    this.hasActed = false;
    this.speed = speed;
    this.target = null;
  }

  //public methods
  takeDamage(value: number) {
    this._currentHealth -= value;
    this.checkIsDead();
  }

  //private methods
  checkIsDead = () => {
    if (this._currentHealth <= 0) {
      this._isDead = true;
    }
  };
}
