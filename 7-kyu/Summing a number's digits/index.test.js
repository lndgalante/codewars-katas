const sumDigits = require('.')

test('Test 1', () => {
  expect(sumDigits(10)).toBe(1)
})

test('Test 2', () => {
  expect(sumDigits(99)).toBe(18)
})

test('Test 3', () => {
  expect(sumDigits(-32)).toBe(5)
})
