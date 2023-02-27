import {EventEmitter} from 'events';

export class ServiceStack extends EventEmitter {
  private static _instance: ServiceStack;
  private _stackArray: Array<Service>;

  private constructor() {
    super();
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new ServiceStack();
    }

    return this._instance;
  }
}
