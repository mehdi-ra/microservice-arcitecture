import {Router, Express} from 'express';

export interface IMicroserviceOptions {
  express: IMicroserviceExpressOptions;
  exchangeName: string;
  routingKey: string;
  queueName: string;
}

export interface IMicroserviceExpressOptions {
  routers?: Router[];
  instance?: Express;
  port?: number;
}
