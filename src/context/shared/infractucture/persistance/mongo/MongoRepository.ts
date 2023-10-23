import { YappClass } from '@context/shared/class/YappClass'
import { Collection, MongoClient, WithId } from 'mongodb'

export abstract class MongoRepository<T extends YappClass> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract moduleName(): string

  protected client(): Promise<MongoClient> {
    return this._client
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.moduleName())
  }

  protected async searchID(id: string): Promise<WithId<Document> | any> {
    const collection = await this.collection()
    const document = collection.findOne({ id: id })
    return (await document)
  }

  protected async persist(id: string, YappClass: T): Promise<void> {
    const collection = await this.collection()

    const document = { ...YappClass.toPrimitives() }

    await collection.updateOne({ id: id }, { $set: document }, { upsert: true })
  }
}
