import {Microservice} from '../../../../shared/utilities/microservice/decorator/Microservice.decorator';
import {SHARED_TOKENS} from '../../../../shared/inversify_token';
import {Logger} from '../../../../shared/utilities/Logger';
import {AppService} from 'src/shared/interfaces/Service';
import {inject, injectable} from 'inversify';
import {Express} from 'express';

@Microservice({
  exchangeName: 'user',
  routingKey: 'userService',
  queueName: 'services',
  port: 3001,
})
@injectable()
export class UserService implements AppService {
  constructor(
    @inject(SHARED_TOKENS.EXPRESS_APP) express: Express,
    @inject(Logger) private logger: Logger,
  ) {
    express.listen(3001);
  }

  logOptions() {
    console.log('change the world as you start');
  }
}
