import { YappClass } from '@context/shared/class/YappClass'
import { Password } from './Password'
import { ID } from './ID'
import { Mail } from './Mail'

export class User extends YappClass {
  readonly id: ID
  readonly email: Mail
  readonly password: Password
  readonly name: string
  readonly creationDate: string

  constructor(email: string, password: string, name: string, id: string) {
    super()
    this.email = Mail.create(email)
    this.password = Password.create(password)
    this.name = name
    this.id = ID.create(id)
    this.creationDate = new Date().toISOString()
  }

  static create(email: string, password: string, name: string, id: string): User {
    return new User(email, password, name, id)
  }

  toPrimitives() {
    return {
      id: this.id.value,
      email: this.email.value,
      password: Password.HashPassword(this.password.value),
      name: this.name.toString(),
      creationDate: this.creationDate.toString(),
    }
  }
}
