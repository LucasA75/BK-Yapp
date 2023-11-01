import { WordMother } from './../../../app/GeneralMother/WordMother';
import { IDMother } from './IDMother'
import { MailMother } from './MailMother';

export class RequestUserSupportMother {
  static random(passIncorrect?: string) {
    return {
      id: IDMother.random().value,
      username: WordMother.randomValueWithoutSymbols(),
      email: MailMother.random().value,
      password: passIncorrect ? passIncorrect : `${WordMother.randomValueLong()}asnd13A`,
    }
  }
}
