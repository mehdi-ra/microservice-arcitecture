import {inject, injectable} from 'inversify';
import {IMainLogger} from '../interfaces/ILogger';
import {SHARED_TOKENS} from '../inversify_token';

@injectable()
export class Logger {
  constructor(
    @inject(SHARED_TOKENS.DEBUG) private debugMod: boolean,
    @inject(SHARED_TOKENS.MAIN_LOGGER) private mainLogger: IMainLogger,
  ) {}

  public log(message: any): void {
    this.mainLogger.info(message);
  }

  public debug(message: any): void {
    if (this.debugMod) {
      this.mainLogger.info(message);
    }
  }

  public error(message: any): void {
    this.mainLogger.error(message);
  }
}
