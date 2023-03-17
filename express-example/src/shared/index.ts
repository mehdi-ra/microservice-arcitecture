/**
 * Everything you share here will be shared to
 * every other Containers.
 */
import {rabbitMQConnectionFactory} from './connections/RabbitMQ';
import {Container} from 'inversify';
import {SHARED_TOKENS} from './inversify_token';
import {winstonLogger} from './utilities/winstonLogger';
import {IMainLogger} from './interfaces/ILogger';
import {AppService} from './interfaces/Service';
import {Logger} from './utilities/Logger';
import {ServicesRegistry} from './utilities/ServicesRegistry';

const SharedContainer = new Container();

SharedContainer.bind<any>(
  SHARED_TOKENS.RABBITMQ_CONNECTION_FACTORY,
).toConstantValue(rabbitMQConnectionFactory);

SharedContainer.bind<IMainLogger>(SHARED_TOKENS.MAIN_LOGGER).toConstantValue(
  winstonLogger,
);

SharedContainer.bind(Logger).toSelf();
SharedContainer.bind<boolean>(SHARED_TOKENS.DEBUG).toConstantValue(false);
SharedContainer.bind<ServicesRegistry>(SHARED_TOKENS.SERVICE_REGISTRY)
  .to(ServicesRegistry)
  .inSingletonScope();

export {SharedContainer};
