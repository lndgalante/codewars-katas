const numberToString = require('.')

test('Test 1', () => {
  expect(numberToString(67)).toBe('67')
})

test('Test 2', () => {
  expect(numberToString(123)).toBe('123')
})

test('Test 3', () => {
  expect(numberToString(999)).toBe('999')
})
