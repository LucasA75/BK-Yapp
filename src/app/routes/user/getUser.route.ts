
import { GetUserController } from '@app/controllers/user/GetUserController';
import container from '@app/dependency-injection';
import { Router, Request, Response, NextFunction } from 'express';

export const register = (router: Router) => {
  const controller : GetUserController = container.get('Controller.GetUserController')
  router.get('/user/:userID', (req: Request, res: Response, next: NextFunction) => {
    return controller.run(req, res, next);
  });
};
