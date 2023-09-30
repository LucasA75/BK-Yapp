import crypto from 'crypto';

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
    if (this.value.length < number) throw Error(`Password must be at least ${number} characters`)
    return true
  }

  verifyMinus(): boolean {
    if (!this.value.match(/^(?=.*[a-z]).+/)) throw Error('Password must have a Minus letter')
    return true
  }

  verifyMayus(): boolean {
    if (!this.value.match(/^(?=.*[A-Z]).+/)) throw Error('Password must have a Mayus letter')
    return true
  }

  verifyNumber(): boolean {
    if (!this.value.match(/^(?=.*\d).+/)) throw Error('Password must have a Number')
    return true
  }

  static HashPassword(password: string): string {
    const hash = crypto.createHash('sha512')
    hash.update(password);
    return hash.digest('hex');
  }
}
