import { PutUserController } from '@app/controllers/user/PutUserController';
import container from '@app/dependency-injection';
import { Router, Request, Response, NextFunction } from 'express';

export const register = (router: Router) => {
  const controller : PutUserController = container.get('Controller.PutUserController')
  router.put('/user', (req: Request, res: Response, next: NextFunction) => {
    return controller.run(req, res, next);
  });
};
