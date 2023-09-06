
export class User {
  readonly id: number
  readonly email: string
  readonly password: string
  readonly name: string
  readonly creationDate: string

  constructor(email: string, password: string, name: string, id:number) {
    this.email = email
    this.password = password
    this.name = name
    this.id = id
    this.creationDate = new Date().toISOString()
  }

  static create(email: string, password: string, name: string, id:number): User {
    return new User(email, password, name, id)
  }

  toPrimitives() {
    return {
      id: this.id.toString(),
      email: this.email.toString(),
      password: this.password.toString(),
      name: this.name.toString(),
      creationDate: this.creationDate.toString(),
    }
  }
}
