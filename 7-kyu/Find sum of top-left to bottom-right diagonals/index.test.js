const diagonalSum = require('.')

test('Test 1', () => {
  expect(diagonalSum([[12]])).toBe(12)
})

test('Test 2', () => {
  expect(diagonalSum([[1, 2], [3, 4]])).toBe(5)
})

test('Test 3', () => {
  expect(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(15)
})

test('Test 4', () => {
  expect(
    diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
  ).toBe(34)
})
