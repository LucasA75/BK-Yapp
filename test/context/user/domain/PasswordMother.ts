import { Password } from '@context/user/domain/class/Password'
import { WordMother } from '@root/test/app/GeneralMother/WordMother'

export class PasswordMother {
  static random(): Password {
    const pass = `${WordMother.randomValueLong()}${WordMother.randomValueShort()}12A*`
    // eslint-disable-next-line no-console
    console.log(pass)
    return Password.create(pass)
  }

  static randomInvalid(): Password {
    return Password.create(WordMother.randomValueLong())
  }
}
