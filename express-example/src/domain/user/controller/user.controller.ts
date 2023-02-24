import {Router, Response, Request} from 'express';
import _UsersJson from '../../../data/users.json';

export const userController = (function () {
  const userRouter = Router();

  userRouter.get('/user', (_req: Request, _res: Response) => {
    _res.json(_UsersJson);
  });

  return userRouter;
})();
