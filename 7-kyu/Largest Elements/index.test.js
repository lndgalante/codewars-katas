const largest = require('.')

test('Test 1', () => {
  expect(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([9, 10])
})

test('Test 2', () => {
  expect(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])).toEqual([5, 5, 5])
})

test('Test 3', () => {
  expect(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])).toEqual([
    3,
    5,
    9,
    13,
    22,
    50,
    63,
  ])
})

test('Test 4', () => {
  expect(largest(0, [1, 2, 3, 4, 8, 7, 6, 5])).toEqual([])
})
