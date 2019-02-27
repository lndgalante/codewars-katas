const testit = require('.')

test('Test 1', () => {
  expect(testit([0], [1])).toEqual([0, 1])
})

test('Test 2', () => {
  expect(testit([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
})

test('Test 3', () => {
  expect(testit([1], [2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('Test 4', () => {
  expect(testit([1, 2, 3], [4])).toEqual([1, 2, 3, 4])
})

test('Test 5', () => {
  expect(testit([1, 2], [1, 2])).toEqual([1, 1, 2, 2])
})

test('Test 6', () => {
  expect(testit([5, 3, 7, 9, 3, 6, 3, 10], [5, 9, 1, 6])).toEqual([1, 3, 5, 5, 6, 6, 7, 9, 9, 10])
})
