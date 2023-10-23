import { Mail } from '@context/user/domain/class/Mail'
import { WordMother } from '@root/test/app/GeneralMother/WordMother'

export class MailMother {
  static random(): Mail {
    const email = `${WordMother.randomValueWithoutSymbols()}@${WordMother.randomValueWithoutSymbols()}.com`
    // eslint-disable-next-line no-console
    console.log(email)
    return Mail.create(email)
  }

  static randomInvalid(): Mail {
    return Mail.create(WordMother.randomValueShort())
  }
}
