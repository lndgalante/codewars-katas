const sumTwoSmallestNumbers = require('.')

test('Test  1', () => {
  expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13)
})

test('Test  2', () => {
  expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6)
})

test('Test  3', () => {
  expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10)
})

test('Test  4', () => {
  expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24)
})

test('Test  5', () => {
  expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24)
})
