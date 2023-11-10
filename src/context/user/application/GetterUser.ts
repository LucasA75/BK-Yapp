import { ID } from '../domain/class/ID'
import { UserRepository } from '../domain/contract/UserRepository'

export class GetterUser {
  constructor(private repository: UserRepository) {}
  async run(id: ID) {
    // eslint-disable-next-line no-console
    console.log("hOlas")
    this.repository
  }
}
