import { User } from '../domain/class/User'
import { UserRepository } from '../domain/contract/UserRepository'

export class RegistrerUser {
  constructor(private repository: UserRepository) {}
  async run(req: { id: string; email: string; password: string; username: string }) {
    const user = User.create(req.email, req.password, req.username, req.id)
    await this.repository.save(user)
  }
}
