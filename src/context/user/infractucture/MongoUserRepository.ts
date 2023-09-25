import { MongoRepository } from '@context/shared/infractucture/persistance/mongo/MongoRepository'
import { User } from '../domain/class/User'
//  import { ConnectionMongo } from '@context/shared/infractucture/persistance/mongo/MongoClient'

export class MongoUserRepository extends MongoRepository<User> {
  protected moduleName(): string {
    return 'user'
  }

  async save(user: User) {
    await this.persist(user.id.toString(), user)
  }
}
