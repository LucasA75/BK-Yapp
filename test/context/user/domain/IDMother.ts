import { ID } from '@context/user/domain/class/ID'
import { WordMother } from '@root/test/app/GeneralMother/WordMother'
import {v4} from "uuid"
export class IDMother {
  static random(): ID {
    return ID.create(v4())
  }

  static randomInvalid(): ID {
    return ID.create(WordMother.randomValueLong())
  }
}
