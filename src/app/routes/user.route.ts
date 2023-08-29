import { Router, Request, Response, NextFunction } from 'express';

export const register = (router: Router) => {
  router.get('/user', (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line no-console
    const data = { status: 'UP', cara: 'Poto' };
    res.status(201).send(data)
  });
};
