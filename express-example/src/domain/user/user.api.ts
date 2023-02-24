import express from 'express';
import {userController} from './controller/user.controller';

const userApp = express();

export function userApi() {
  userApp.use(userController);
  userApp.listen(3001, () => {
    console.log('hello and welcome');
  });

  console.log('hey body');
}
