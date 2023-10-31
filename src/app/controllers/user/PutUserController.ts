import { RegistrerUser } from '@context/user/application/RegistrerUser'
import { Request, Response, NextFunction } from 'express'
import { BaseController } from '../BaseController'

export class PutUserController implements BaseController {
  constructor(private registerUser: RegistrerUser) {}
  async run(req: Request, res: Response, _next: NextFunction): Promise<any> {
    await this.registerUser.run(req.body)
    const registroExitoso = { status: 'La solicitud a tenido exito' }
    res.status(201).send(registroExitoso)
  }
}
