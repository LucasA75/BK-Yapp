import container from '@app/dependency-injection'
import { MongoUserRepository } from '@context/user/infractucture/MongoUserRepository'
import { UserMother } from '../domain/UserMother'
import { MongoClientFactory } from '@context/shared/infractucture/persistance/mongo/MongoClientFactory';

const repository: MongoUserRepository = container.get('Repository.MongoUserRepository')

const user = UserMother.validUser();

describe('Save a user', () => {
  it('should save a user', async () => {
    const expected = await repository.save(user)
    expect(expected).toBe(void 0)
  })
  afterAll(async () => {
    // Cierra todas las conexiones de MongoDB aquí
    await MongoClientFactory.closeAllConnections()
  })
})
