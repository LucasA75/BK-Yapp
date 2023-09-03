import { UUID } from 'mongodb'

export class User {
  readonly id: Uint8Array = UUID.generate()
  readonly email: string
  readonly password: string
  readonly name: string

  constructor(email: string, password: string, name: string) {
    this.email = email
    this.password = password
    this.name = name
  }

  static create(email: string, password: string, name: string): User {
    return new User(email, password, name)
  }

  ToPrimitives() {
    return {
      id: this.id.toString(),
      email: this.email.toString(),
      password: this.password.toString(),
      name: this.name.toString(),
    }
  }
}
