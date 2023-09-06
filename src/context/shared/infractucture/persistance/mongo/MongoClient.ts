import config from '@app/config'
import { User } from '@context/user/domain/class/User'
import { MongoClient } from 'mongodb'

export class ConnectionMongo {
  readonly url: string = config.MONGOURL
  static dbName: string = "YappDB"

  static async connect(collectionName: string, user : User): Promise<void> {
    const client = new MongoClient(config.MONGOURL)
    try {
      // eslint-disable-next-line no-console
      console.log('Estoy tratando de conectarme')
      await client.connect()
      const db = client.db(ConnectionMongo.dbName)
      // eslint-disable-next-line no-console
      console.log('Connected to Mongo')
      const collection = db.collection(collectionName)
      const result = await collection.insertOne({ _id: undefined, ...user.toPrimitives() })
      // eslint-disable-next-line no-console
      console.log(`Documento insertado con ID: ${result.insertedId}`)
    } finally {
      await client.close()
    }
  }
}
