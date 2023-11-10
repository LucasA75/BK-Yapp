import { Request, Response, NextFunction } from 'express'
import { BaseController } from '../BaseController'
import { GetterUser } from '@context/user/application/GetterUser'
import { ID } from '@context/user/domain/class/ID'

export class GetUserController implements BaseController {
  constructor(private getterUser: GetterUser) {}
  async run(req: Request, res: Response, _next: NextFunction): Promise<any> {
    const user = await this.getterUser.run(ID.create(req.params.userID))
    res.status(200).send(user)
  }
}

