import {Microservice} from '../../../shared/utilities/microservice/decorator/Microservice.decorator';
import {userController} from '../interfaces/controllers/userController';
import {injectable} from 'inversify';

@injectable()
@Microservice({
  exchangeName: '',
  queueName: '',
  routingKey: '',
  express: {
    routers: [userController],
    port: 3001,
  },
})
export class UserModule {}
