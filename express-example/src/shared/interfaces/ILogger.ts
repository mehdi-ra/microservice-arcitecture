/* eslint-disable no-unused-vars */
export interface IMainLogger {
  log: (message: any) => void;
  error: (message: any) => void;
  debug: (message: any) => void;
  info: (message: any) => void;
}
