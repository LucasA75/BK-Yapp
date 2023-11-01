/* eslint-disable no-console */
import { BooleanMother } from './BooleanMother';
import { NumberMother } from './NumberMother';
import { WordMother } from './WordMother'

import {describe, expect, test} from '@jest/globals';

describe('test all random values', () => {
  test('WordMother Creation test', () => {
    const word = WordMother.randomValueLong()
    expect(typeof word).toBe('string')
  })

  test('BooleanMother Creation test', () => {
    const bool = BooleanMother.randomValue()
    expect(typeof bool).toBe('boolean')
  })

  test('NumberMother Creation test', () => {
    const number = NumberMother.randomValueShort()
    expect(typeof number).toBe('number')
  })
})
