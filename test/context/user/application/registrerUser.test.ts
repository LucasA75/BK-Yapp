import container from '@app/dependency-injection'
import { RegistrerUser } from '@context/user/application/RegistrerUser'
import { MongoUserRepository } from '@context/user/infractucture/MongoUserRepository'
import { RequestUserSupportMother } from '../domain/RequestUserMother'
import { WordMother } from '@root/test/app/GeneralMother/WordMother'
import { MongoClientFactory } from '@context/shared/infractucture/persistance/mongo/MongoClientFactory'

let registrerUser: RegistrerUser

const repository: MongoUserRepository = container.get('Repository.MongoUserRepository')

describe('Save a User', () => {
  beforeEach(() => {
    jest.spyOn(repository, 'save')
    registrerUser = new RegistrerUser(repository)
  })

  it('should save a UserSupport', async () => {
    const request = RequestUserSupportMother.random()
    await registrerUser.run(request)
    expect(repository.save).toHaveBeenCalled()
  })

  it('should not save a User', async () => {
    const request = RequestUserSupportMother.random(WordMother.randomValueShort())
    await expect(async () => {
      await registrerUser.run(request)
    }).rejects.toThrow()
  })
  afterAll(async () => {
    // Cierra todas las conexiones de MongoDB aquí
    await MongoClientFactory.closeAllConnections()
  })
})
