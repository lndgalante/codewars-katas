const pickIt = require('.')

test('Test 1', () => {
  expect(pickIt([1, 2])).toEqual([[1], [2]])
})

test('Test 2', () => {
  expect(pickIt([1, 2, 3])).toEqual([[1, 3], [2]])
})

test('Test 3', () => {
  expect(pickIt([3, 2, 1])).toEqual([[3, 1], [2]])
})

test('Test 4', () => {
  expect(pickIt([10, 20, 30])).toEqual([[], [10, 20, 30]])
})

test('Test 5', () => {
  expect(pickIt([11, 21, 31])).toEqual([[11, 21, 31], []])
})

test('Test 6', () => {
  expect(pickIt([8, 1, 5, 4, 6, 1, 1])).toEqual([[1, 5, 1, 1], [8, 4, 6]])
})
