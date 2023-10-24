import { ErrorYapp } from '@context/shared/class/ErrorYappClass'
import crypto from 'crypto'

export class Password {
  readonly value: string

  constructor(value: string) {
    this.value = value
    this.verifyPass()
  }

  static create(value: string): Password {
    return new Password(value)
  }

  verifyPass(): void {
    if (this.verifyLengh(6) && this.verifyMayus() && this.verifyMinus() && this.verifyNumber()) {
    }
  }

  verifyLengh(number: number): boolean {
    if (this.value.length < number) throw new ErrorYapp(`Password must be at least ${number} characters`, 400)
    return true
  }

  verifyMinus(): boolean {
    if (!this.value.match(/^(?=.*[a-z]).+/)) throw new ErrorYapp('Password must have a Minus letter', 400)
    return true
  }

  verifyMayus(): boolean {
    if (!this.value.match(/^(?=.*[A-Z]).+/)) throw new ErrorYapp('Password must have a Mayus letter', 400)
    return true
  }

  verifyNumber(): boolean {
    if (!this.value.match(/^(?=.*\d).+/)) throw new ErrorYapp('Password must have a Number', 400)
    return true
  }

  static HashPassword(password: string): string {
    const hash = crypto.createHash('sha512')
    hash.update(password)
    return hash.digest('hex')
  }
}
