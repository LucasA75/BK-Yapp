export class BooleanMother {
  private static generateValue(): number {
    return Math.round(Math.random())
  }

  static randomValue(): Boolean {
    return this.generateValue() != 1 ? false : true
  }
}
