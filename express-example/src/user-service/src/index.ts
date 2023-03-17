import 'reflect-metadata';

import {Express} from 'express';
import {SharedContainer} from '../../shared';
import {UserService} from './domain/services/UserService';
import {SHARED_TOKENS} from '../../shared/inversify_token';
import {userExpressFactory} from './infrastructures/drivers/express';

const userServiceContainer = SharedContainer.createChild();

userServiceContainer
  .bind<Express>(SHARED_TOKENS.EXPRESS_APP)
  .toConstantValue(userExpressFactory());
userServiceContainer.bind(UserService).toSelf();

const UserMicroService = userServiceContainer.get(UserService);
export {UserMicroService};
