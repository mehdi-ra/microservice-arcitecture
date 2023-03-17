import {Router, RouterOptions, Request, Response} from 'express';

export const userController = (function (options?: RouterOptions) {
  const UserRouter = Router(options);

  UserRouter.get('/', (req: Request, res: Response) => {
    res.end('Hello');
  });

  return UserRouter;
})();
