import container from '@app/dependency-injection'
import { MongoUserRepository } from '@context/user/infractucture/MongoUserRepository'
import { MongoClientFactory } from '@context/shared/infractucture/persistance/mongo/MongoClientFactory'
import { GetterUser } from '@context/user/application/GetterUser'
import { IDMother } from '../domain/IDMother'
import { ID } from '@context/user/domain/class/ID'

let getterUser: GetterUser

const repository: MongoUserRepository = container.get('Repository.MongoUserRepository')

describe('Get a User', () => {
  beforeEach(() => {
    jest.spyOn(repository, 'get')
    getterUser = new GetterUser(repository)
  })

  it('should found a User', async () => {
    const request = ID.create("6fc2b172-2af4-4f37-950b-8565f0b3677c")
    await getterUser.run(request)
    expect(repository.get).toHaveBeenCalled()
  })

  it('should not found a User', async () => {
    const request = IDMother.random()
    await expect(async () => {
      await getterUser.run(request)
    }).rejects.toThrow()
  })
  afterAll(async () => {
    // Cierra todas las conexiones de MongoDB aquí
    await MongoClientFactory.closeAllConnections()
  })
})
