const countSquares = require('.')

test('Test 1', () => {
  expect(countSquares(5)).toBe(152)
})

test('Test 2', () => {
  expect(countSquares(16)).toBe(1538)
})

test('Test 3', () => {
  expect(countSquares(23)).toBe(3176)
})
