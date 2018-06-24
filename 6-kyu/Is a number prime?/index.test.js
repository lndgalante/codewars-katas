const isPrime = require('.')

test('Test 1', () => {
  expect(isPrime(0)).toBeFalse()
})

test('Test 2', () => {
  expect(isPrime(1)).toBeFalse()
})

test('Test 3', () => {
  expect(isPrime(2)).toBeTrue()
})
