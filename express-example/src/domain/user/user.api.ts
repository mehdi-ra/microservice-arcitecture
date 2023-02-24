import {userController} from '@domain/user/controller/user.controller';
import {APIsConfig} from '@interface/shared/APIsConfig';
import express from 'express';

export const userApi = (function () {
  return (_config: APIsConfig) => {
    const userApp = express();

    userApp.use(userController);
    userApp.listen(3001, () => {
      console.log('hello and welcome');
    });
  };
})();
