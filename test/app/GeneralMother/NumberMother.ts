export class NumberMother {
  private static generateValue(max: number, min: number): number {
    return Math.round(Math.random() * (max - min) + min)
  }

  static randomValueOneDigit(): number {
    return this.generateValue(10, 0)
  }

  static randomValueShort(): number {
    return this.generateValue(1000, 10)
  }

  static randomValueLong(): number {
    return this.generateValue(400000000, 100000)
  }
}
