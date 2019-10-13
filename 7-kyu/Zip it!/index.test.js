/* eslint no-unused-vars: 0 */

const Array = require('.')

describe('Tests for Zip function', () => {
  const a = [1, 2, 3, 4, 5]
  const b = ['a', 'b', 'c', 'd', 'e']

  test('Test 1', () => {
    expect(a.zip(b, (a, b) => a + b)).toEqual(['1a', '2b', '3c', '4d', '5e'])
  })

  test('Test 2', () => {
    expect(b.zip(a, (a, b) => a + b)).toEqual(['a1', 'b2', 'c3', 'd4', 'e5'])
  })

  test('Test 3', () => {
    expect(b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => a + b)).toEqual(
      b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => a + b)
    )
  })
})
