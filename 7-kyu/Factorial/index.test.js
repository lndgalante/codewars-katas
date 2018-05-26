const factorial = require('.')

test('Test 1', () => {
  expect(factorial(0)).toBe(1)
})

test('Test 2', () => {
  expect(factorial(1)).toBe(1)
})

test('Test 3', () => {
  expect(factorial(2)).toBe(2)
})

test('Test 4', () => {
  expect(factorial(3)).toBe(6)
})
