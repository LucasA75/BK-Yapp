import { User } from '@context/user/domain/class/User'
import { UserMother } from './UserMother'
import { PasswordMother } from './PasswordMother'
import { Password } from '@context/user/domain/class/Password'
import { MailMother } from './MailMother'
import { Mail } from '@context/user/domain/class/Mail'
import { IDMother } from './IDMother'
import { ID } from '@context/user/domain/class/ID'

describe('Test Creational', () => {
  test('UserSupport Creation test', () => {
    const user = UserMother.validUser()
    expect(user).toBeInstanceOf(User)
  })

  test('Pass Creation test', () => {
    const pass = PasswordMother.random()
    expect(pass).toBeInstanceOf(Password)
  })

  test('MAIL Creation test', () => {
    const email = MailMother.random()
    expect(email).toBeInstanceOf(Mail)
  })

  test('ID Creation test', () => {
    const pass = IDMother.random()
    expect(pass).toBeInstanceOf(ID)
  })
})
