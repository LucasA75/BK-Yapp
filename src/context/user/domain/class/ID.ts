import { ErrorYapp } from '@context/shared/class/ErrorYappClass'
import { validate } from 'uuid'
export class ID {
  readonly value: string

  constructor(value: string) {
    this.value = value
    this.validateID()
  }

  static create(value: string): ID {
    return new ID(value)
  }

  private validateID() {
    if (!validate(this.value)) throw new ErrorYapp('Invalid ID', 400)
  }
}
