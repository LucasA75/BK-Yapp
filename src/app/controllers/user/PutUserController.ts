import { Request, Response, NextFunction } from 'express'
import { BaseController } from '../BaseController'
import { RegistrerUser } from '@context/user/application/RegistrerUser'

export class PutUserController implements BaseController {
  constructor(private registerUser: RegistrerUser) {}
  async run(req: Request, res: Response, _next: NextFunction): Promise<any> {
    await this.registerUser.run(req.body)
    res.status(201).send("Guadado con exito")
  }
}
