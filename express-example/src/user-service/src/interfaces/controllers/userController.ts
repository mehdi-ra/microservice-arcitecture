import {Router, RouterOptions} from 'express';

export const userController = (function (options?: RouterOptions) {
  const UserRouter = Router(options);
  return UserRouter;
})();
