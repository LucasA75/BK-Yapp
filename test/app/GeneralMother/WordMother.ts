/* eslint-disable no-console */
export class WordMother {
  private static generateValue(index: number) {
    const word: Array<string> = []
    const pickCharacter = (number: number): string => {
      switch (number) {
        case 1:
          return 'G'
        case 2:
          return 'w'
        case 3:
          return ''
        case 4:
          return 'AL'
        case 5:
          return 'Gxas'
        case 6:
          return 'xxH'
        case 7:
          return 'gbdf'
        case 8:
          return '123xx..'
        case 9:
          return '?#1sdas'
        case 10:
          return '134xSA*as{}1'
        default:
          return 'a'
      }
    }
    const number = (): number => {
      return Math.round(Math.random() * (11 - 0))
    }

    for (let i = 0; i < index; i++) {
      word.push(pickCharacter(number()))
    }
    return word.toString().replace(/,/g, '')
  }

  static randomValueShort(): string {
    return this.generateValue(1)
  }

  static randomValueLong(): string {
    return this.generateValue(4)
  }

  static randomValueWithoutSymbols(): string {
    return this.generateValue(2).replace( /[^a-zA-Z]/g, '')
  }
}
