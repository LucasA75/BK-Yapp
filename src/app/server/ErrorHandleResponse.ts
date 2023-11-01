/* eslint-disable no-console */
import { ErrorYapp } from '@context/shared/class/ErrorYappClass'
import { NextFunction, Response, Request } from 'express'

export const ErrorHandlerResponse = (error: Error | any, req: Request, res: Response, _next: NextFunction): Response => {
  console.error(error, req)
  if (error instanceof ErrorYapp || error.status) return res.status(error.codeError).send(error)
  return res.status(500).send()
}
