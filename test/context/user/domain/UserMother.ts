import { User } from '@context/user/domain/class/User'
import { MailMother } from './MailMother'
import { PasswordMother } from './PasswordMother'
import { WordMother } from '@root/test/app/GeneralMother/WordMother'
import { IDMother } from './IDMother'

export class UserMother {
  static validUser(): User {
    return User.create(MailMother.random().value, PasswordMother.random().value, WordMother.randomValueWithoutSymbols(), IDMother.random().value)
  }

  static incorrectUser(): User {
    return User.create(MailMother.randomInvalid().value, PasswordMother.randomInvalid().value, WordMother.randomValueShort(), IDMother.randomInvalid().value)
  }
}
