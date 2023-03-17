import {MicroserviceReplacement} from '../../../../shared/utilities/microservice/decorator/Microservice.decorator';
import {options} from '../../../../shared/utilities/microservice/decorator/Options.decorator';
import {ServicesRegistry} from '../../../../shared/utilities/ServicesRegistry';
import {userController} from '../../interfaces/controllers/userController';
import {Logger} from '../../../../shared/utilities/Logger';
import {inject, injectable} from 'inversify';
import EventEmitter from 'events';

@injectable()
@MicroserviceReplacement({
  exchangeName: '',
  queueName: '',
  routingKey: '',
  express: {
    routers: [userController],
    port: 3001,
  },
})
export class UserService extends EventEmitter {
  @options options: any; // This can be null because of asynchronous.

  constructor(
    @inject(Logger) private logger: Logger,
    @inject(ServicesRegistry) private registry: ServicesRegistry,
  ) {
    super();
  }

  logOptions() {}
}
