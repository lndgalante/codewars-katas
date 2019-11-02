const squareRoot = require('.')

test('Test 1', () => {
  expect(squareRoot(81)).toBe(9)
})

test('Test 2', () => {
  expect(squareRoot(15)).toBe(3.87298)
})
