
const Arith = require('.')

describe('Arith with three value',() => {
  const arith = new Arith('three')

  test('Test 1', () => {
    expect(arith.add('seven')).toBe('ten')
  })

  test('Test 2', () => {
    expect(arith.add('eight')).toBe('eleven')
  })

  test('Test 3', () => {
    expect(arith.add('zero')).toBe('three')
  })
})
