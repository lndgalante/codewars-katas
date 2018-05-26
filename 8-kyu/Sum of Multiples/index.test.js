const sumMul = require('.')

test('Test 1', () => {
  expect(sumMul(0, 0)).toBe('INVALID')
})

test('Test 2', () => {
  expect(sumMul(2, 9)).toBe(20)
})

test('Test 3', () => {
  expect(sumMul(4, -7)).toBe('INVALID')
})
