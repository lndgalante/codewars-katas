const factorial = require('.')

test('Test 1', () => {
  expect(factorial(0)).toBe(1)
})

test('Test 2', () => {
  expect(factorial(1)).toBe(1)
})

test('Test 3', () => {
  expect(factorial(4)).toBe(24)
})

test('Test 4', () => {
  expect(factorial(7)).toBe(5040)
})

test('Test 5', () => {
  expect(factorial(17)).toBe(355687428096000)
})
