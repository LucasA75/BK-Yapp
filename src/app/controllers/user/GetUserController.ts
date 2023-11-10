import { Request, Response, NextFunction } from 'express'
import { BaseController } from '../BaseController'
import { GetterUser } from '@context/user/application/GetterUser'
import { IDMother } from '@root/test/context/user/domain/IDMother'

export class GetUserController implements BaseController {
  constructor(private getterUser: GetterUser) {}
  async run(req: Request, res: Response, _next: NextFunction): Promise<any> {
    // eslint-disable-next-line no-console
    console.log(req.params.userID)
    await this.getterUser.run(IDMother.random())
    const registroExitoso = { status: 'La solicitud a tenido exito' }
    res.status(200).send(registroExitoso)
  }
}
