import { ErrorYapp } from "@context/shared/class/ErrorYappClass";

export class Mail {
  readonly value: string

  constructor(value: string) {
    this.value = value
    this.validateMail()
  }

  static create(value: string): Mail {
    return new Mail(value)
  }

  private validateMail() {
    const regexCorreoElectronico = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regexCorreoElectronico.test(this.value)) throw new ErrorYapp('Invalid Mail', 400)
  }
}
