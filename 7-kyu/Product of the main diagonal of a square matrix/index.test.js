const mainDiagonalProduct = require('.')

test('Test 1', () => {
  expect(mainDiagonalProduct([[1, 0], [0, 1]])).toBe(1)
})

test('Test 2', () => {
  expect(mainDiagonalProduct([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(45)
})
