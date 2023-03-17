import {Express} from 'express';
export interface IServicesRegistryOptions {
  name: string;
  channel: string;
  queue?: string;
  target?: any;
  express?: Express;
}
