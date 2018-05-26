const fahrenheitToCelsius = require('.')

test('Test 1', () => {
  expect(fahrenheitToCelsius(50)).toBe(10)
})

test('Test 2', () => {
  expect(fahrenheitToCelsius(53.6)).toBe(12)
})
