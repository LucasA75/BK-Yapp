import { ID } from '../domain/class/ID'
import { User } from '../domain/class/User'
import { UserRepository } from '../domain/contract/UserRepository'

export class GetterUser {
  constructor(private repository: UserRepository) {}
  async run(id: ID): Promise<User> {
    return this.repository.get(id)
  }
}
