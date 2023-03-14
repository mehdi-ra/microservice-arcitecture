import {Logger} from 'winston';
import {container} from 'tsyringe';
import {SHARED_PROVIDERS} from './providers';
import {rabbitmqConnection} from './connections/RabbitMQ';

const SharedContainer = container.createChildContainer();

SharedContainer.registerInstance(SHARED_PROVIDERS.RABBITMQ_CON_STR, 'amqp://localhost');
SharedContainer.registerInstance(SHARED_PROVIDERS.RABBITMQ_CONNECTION, rabbitmqConnection);
SharedContainer.registerSingleton(Logger);

export {SharedContainer};
