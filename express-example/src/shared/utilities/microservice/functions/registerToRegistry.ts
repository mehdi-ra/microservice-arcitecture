import {Channel, Connection} from 'amqplib';
import {Logger} from '../../Logger';
import {SharedContainer} from '../../..';
import {SHARED_TOKENS} from '../../../inversify_token';
import {ServicesRegistry} from '../../ServicesRegistry';

export function registerToRegistry(target: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const logger = SharedContainer.get<Logger>(Logger);
    const registry = SharedContainer.get<ServicesRegistry>(ServicesRegistry);

    const connectionFactory = SharedContainer.get<() => Promise<Connection>>(
      SHARED_TOKENS.RABBITMQ_CONNECTION_FACTORY,
    );

    connectionFactory()
      .then((connection: Connection) => {
        logger.debug(`RabbitMQ Connection established for: ${target.name}`);
        return connection.createChannel();
      })
      .then((channel: Channel) => {
        registry.register({
          channel: `${target.name}: channel`,
          name: target.name,
          target: target,
        });

        logger.debug(`Service registered ${target.name}`);
        resolve();
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
