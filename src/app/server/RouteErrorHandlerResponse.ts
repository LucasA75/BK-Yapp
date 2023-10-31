import { NextFunction, Response, Request } from 'express';

export const RouteErrorHandlerResponse = (req: Request, res: Response, _next: NextFunction): Response => {
  printRequest(req);
  return res.status(505).send({ error: `😝 invalid method '${req.method}' or invalid request '${req.originalUrl}'. Please check documentation` });
};

const printRequest = (req: Request): void => {
  // eslint-disable-next-line no-console
  console.error(`Error on in request: ${req.originalUrl}`);
  // eslint-disable-next-line no-console
  console.error(`Request method: ${req.method}`);
};
