import {Express} from 'express';
import {SharedContainer} from '../../shared';
import {UserModule} from './domain/UserModule';
import {SHARED_TOKENS} from '../../shared/inversify_token';
import {userExpressFactory} from './infrastructures/drivers/express';

export const UserModuleFactory = function (options?: any) {
  const userServiceContainer = SharedContainer.createChild();

  userServiceContainer
    .bind<Express>(SHARED_TOKENS.EXPRESS_APP)
    .toConstantValue(userExpressFactory());
  userServiceContainer.bind(UserModule).toSelf();

  return userServiceContainer.get(UserModule);
};
