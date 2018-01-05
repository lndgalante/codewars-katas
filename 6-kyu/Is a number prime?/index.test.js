const isPrime = require('./index.js')

test('Test 1', () => {
  expect(isPrime(0)).toBeFalsy()
})

test('Test 2', () => {
  expect(isPrime(1)).toBeFalsy()
})

test('Test 3', () => {
  expect(isPrime(2)).toBeTruthy()
})
