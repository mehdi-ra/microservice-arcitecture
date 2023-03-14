/* eslint-disable no-unused-vars */

import {Channel, Connection} from 'amqplib';
import {SHARED_PROVIDERS} from '../../shared/providers';
import {SharedContainer} from '../../shared';

import {IMicroserviceOptions} from '../interfaces/IMicroserviceOptions';
import {Logger} from '../../shared/utilities/Logger';
import {MicroserviceTokens} from '../providers';

export function Microservice(options: IMicroserviceOptions) {
  return function <T extends {new (...args: any[]): {}}>(BaseClass: T) {
    Reflect.defineMetadata(MicroserviceTokens.MICROSERVICE_TOKEN_OPTIONS, options, BaseClass);
    return class extends BaseClass {
      _logger = new Logger();
      _channel!: Channel;
      _options;

      constructor(...args: any[]) {
        super(args);

        this._options = options;
        this.connect()
          .then(() => {})
          .catch((err: any) => {
            this._logger.error(err);
          });
      }

      async connect(): Promise<void> {
        try {
          const connection: Connection = await SharedContainer.resolve(SHARED_PROVIDERS.RABBITMQ_CONNECTION);
          this._channel = await connection.createChannel();
        } catch (e) {
          this._logger.error(e);
        }
      }
    };
  };
}
