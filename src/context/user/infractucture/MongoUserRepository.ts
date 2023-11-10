import { MongoRepository } from '@context/shared/infractucture/persistance/mongo/MongoRepository'
import { User } from '../domain/class/User'
import { UserRepository } from '../domain/contract/UserRepository'
import { ID } from '../domain/class/ID'
import { ErrorYapp } from '@context/shared/class/ErrorYappClass'
//  import { ConnectionMongo } from '@context/shared/infractucture/persistance/mongo/MongoClient'

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  protected moduleName(): string {
    return 'user'
  }

  async get(userID: ID): Promise<User> {
    const user = await this.searchID(userID.value)
    if (user === null) throw new ErrorYapp('User not found', 400)
    return user
  }

  async save(user: User) {
    await this.persist(user.id.value, user)
  }

  async update(user: User) {
    await this.searchID(user.id.value)
  }
}
