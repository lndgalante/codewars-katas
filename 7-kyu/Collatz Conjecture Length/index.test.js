const collatz = require('./index.js')

test('Test 1', () => {
  expect(collatz(20)).toBe(8)
})

test('Test 2', () => {
  expect(collatz(15)).toBe(18)
})
