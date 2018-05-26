const findDifference = require('.')

test('Test 1', () => {
  expect(findDifference([3, 2, 5], [1, 4, 4])).toBe(14)
})

test('Test 2', () => {
  expect(findDifference([9, 7, 2], [5, 2, 2])).toBe(106)
})

test('Test 3', () => {
  expect(findDifference([11, 2, 5], [1, 10, 8])).toBe(30)
})

test('Test 4', () => {
  expect(findDifference([4, 4, 7], [3, 9, 3])).toBe(31)
})

test('Test 5', () => {
  expect(findDifference([15, 20, 25], [10, 30, 25])).toBe(0)
})
