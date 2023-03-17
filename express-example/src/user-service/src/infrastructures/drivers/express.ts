import {mainExpress} from '../../../../shared/drivers/mainExpress';
import {userController} from '../../interfaces/controllers/userController';

export function userExpressFactory() {
  const userExpress = mainExpress;

  userExpress.use('/user', userController);
  return userExpress;
}
