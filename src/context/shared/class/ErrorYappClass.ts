export class ErrorYapp extends Error {
  error: string
  codeError?: number
  constructor(error: string, codeError?: number) {
    super(error)
    this.codeError = codeError
    this.error = error
  }
}
