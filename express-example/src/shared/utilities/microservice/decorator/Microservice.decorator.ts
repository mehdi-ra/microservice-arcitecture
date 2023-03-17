/**
 * Using this file we connect the service to rabbitMQ.
 * and update them here.
 */
import {IMicroserviceOptions} from '../interfaces/IMicroserviceOptions';
import {SHARED_TOKENS} from '../../../inversify_token';
import {Channel, Connection} from 'amqplib';
import {SharedContainer} from '../../../';
import {injectable} from 'inversify';
import {Logger} from '../../Logger';

const logger = SharedContainer.get<Logger>(Logger);

export function Microservice(options: IMicroserviceOptions) {
  return function <T extends {new (...args: any[]): {}}>(BaseClass: T) {
    @injectable()
    class MicroService extends BaseClass {
      public _channel!: Channel;
      public _connection!: Connection;
      public _queue!: Connection;
      public testq = ['jinda', 'test'];

      constructor(...args: any[]) {
        console.log('');
        super(...[...args]);
        this.connect()
          .then(() => {
            logger.log('Connected without any problem to rabbitmq');
          })
          .catch((err: any) => {
            console.log(err);
            logger.error(err?.toString() || err);
            process.kill(process.pid, 'SIGTERM');
          });
      }

      // ----------------------------------------Public Methods|

      public async connect(): Promise<void> {
        try {
          const connectionFactory: Function = SharedContainer.get(
            SHARED_TOKENS.RABBITMQ_CONNECTION_FACTORY,
          );

          this._connection = await connectionFactory();
          this._channel = await this._connection.createChannel();
        } catch (e) {
          throw new Error('Problem in connecting to mqp server');
        }
      }
    }

    return MicroService;
  };
}

function MicroserviceReplacement(options?: IMicroserviceOptions) {
  return function (target: any) {};
}
