import { YappClass } from '@context/shared/class/YappClass'
import { Collection, MongoClient } from 'mongodb';

export abstract class MongoRepository<T extends YappClass> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract moduleName(): string

  protected client(): Promise<MongoClient> {
    return this._client
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.moduleName())
  }

  protected async persist(id: string, YappClass: T): Promise<void> {
    const collection = await this.collection()

    const document = { ...YappClass.toPrimitives(), id: id }

    await collection.updateOne({id: id}, { $set: document }, { upsert: true })
  }
}
