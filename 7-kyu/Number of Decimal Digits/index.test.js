const digits = require('.')

test('Test 1', () => {
  expect(digits(5)).toBe(1)
})

test('Test 2', () => {
  expect(digits(12345)).toBe(5)
})

test('Test 3', () => {
  expect(digits(9876543210)).toBe(10)
})
