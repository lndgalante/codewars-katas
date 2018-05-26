const sumPairs = require('.')

test('Test 1', () => {
  expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7])
})

test('Test 2', () => {
  expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6])
})

test('Test 3', () => {
  expect(sumPairs([20, -13, 40], -7)).toBeUndefined()
})

test('Test 4', () => {
  expect(sumPairs([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1])
})

test('Test 5', () => {
  expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7])
})

test('Test 6', () => {
  expect(sumPairs([4, -2, 3, 3, 4], 8)).toEqual([4, 4])
})

test('Test 7', () => {
  expect(sumPairs([0, 2, 0], 0)).toEqual([0, 0])
})

test('Test 8', () => {
  expect(sumPairs([5, 9, 13, -3], 10)).toEqual([13, -3])
})
