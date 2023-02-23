export abstract class Entity {
  protected _unique: Symbol;

  constructor() {
    this._unique = Symbol(this.constructor.name);
  }
}
