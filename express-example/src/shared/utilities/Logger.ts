import {createLogger, format, transports} from 'winston';

const winstonLogger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({filename: 'error.log', level: 'error'}),
    new transports.File({filename: 'combined.log'}),
  ],
});

export class Logger {
  constructor() {}

  public log(message: any): void {
    winstonLogger.info(message);
  }

  public debug(message: any): void {
    winstonLogger.debug(message);
  }

  public error(message: any): void {
    winstonLogger.error(message);
  }
}
