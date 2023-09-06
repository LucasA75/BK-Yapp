import { MongoRepository } from '@context/shared/infractucture/persistance/mongo/MongoRepository'
import { User } from '../domain/class/User'
//  import { ConnectionMongo } from '@context/shared/infractucture/persistance/mongo/MongoClient'

export class MongoUserRepository extends MongoRepository<any> {
  protected moduleName(): string {
    return 'user'
  }

  async save(user: User) {
    // eslint-disable-next-line no-console
    console.log('Holas')
    // await ConnectionMongo.connect(this.moduleName(), user)
    await this.persist(user.id.toString(), user)
  }
}
