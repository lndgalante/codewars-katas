const sumSquares = require('.')

test('Test 1', () => {
  expect(sumSquares([1, 2, 3, 4, 5])).toBe(55)
})

test('Test 2', () => {
  expect(sumSquares([7, 3, 9, 6, 5])).toBe(200)
})

test('Test 3', () => {
  expect(sumSquares([11, 13, 15, 18, 2])).toBe(843)
})

test('Test 4', () => {
  expect(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])).toBe(110)
})
