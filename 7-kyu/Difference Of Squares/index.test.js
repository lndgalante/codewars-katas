const differenceOfSquares = require('.')

test('Test 1', () => {
  expect(differenceOfSquares(5)).toBe(170)
})

test('Test 2', () => {
  expect(differenceOfSquares(10)).toBe(2640)
})

test('Test 3', () => {
  expect(differenceOfSquares(100)).toBe(25164150)
})
