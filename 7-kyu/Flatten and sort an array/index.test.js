const flattenAndSort = require('.')

test('Test 1', () => {
  expect(flattenAndSort([])).toEqual([])
})

test('Test 2', () => {
  expect(flattenAndSort([[], [1]])).toEqual([1])
})

test('Test 3', () => {
  expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ])
})

test('Test 4', () => {
  expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    100,
  ])
})
