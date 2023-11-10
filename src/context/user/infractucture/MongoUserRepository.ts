import { MongoRepository } from '@context/shared/infractucture/persistance/mongo/MongoRepository'
import { User } from '../domain/class/User'
import { UserRepository } from '../domain/contract/UserRepository'
import { ID } from '../domain/class/ID'
//  import { ConnectionMongo } from '@context/shared/infractucture/persistance/mongo/MongoClient'

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  get(userID: ID): Promise<User> {
    throw new Error('Method not implemented.')
  }
  protected moduleName(): string {
    return 'user'
  }

  async save(user: User) {
    await this.persist(user.id.value, user)
  }

  async update(user: User) {
    await this.searchID(user.id.value)
  }
}
