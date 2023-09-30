import { YappClass } from '@context/shared/class/YappClass'
import { Password } from './Password'

export class User extends YappClass {
  readonly id: number // Esto va ha ser uuid
  readonly email: string
  readonly password: Password
  readonly name: string
  readonly creationDate: string

  constructor(email: string, password: string, name: string, id: number) {
    super()
    this.email = email
    this.password = Password.create(password)
    this.name = name
    this.id = id
    this.creationDate = new Date().toISOString()
  }

  static create(email: string, password: string, name: string, id: number): User {
    return new User(email, password, name, id)
  }

  toPrimitives() {
    return {
      id: this.id.toString(),
      email: this.email.toString(),
      password: Password.HashPassword(this.password.value),
      name: this.name.toString(),
      creationDate: this.creationDate.toString(),
    }
  }
}
