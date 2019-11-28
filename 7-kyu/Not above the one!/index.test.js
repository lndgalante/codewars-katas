const binaryCleaner = require('.')

test('Test 1', () => {
  expect(binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0])).toEqual([
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [2, 5, 10, 11, 12, 13],
  ])
})

test('Test 2', () => {
  expect(binaryCleaner([0, 1, 1, 2, 0])).toEqual([[0, 1, 1, 0], [3]])
})

test('Test 3', () => {
  expect(binaryCleaner([2, 2, 0])).toEqual([[0], [0, 1]])
})

test('Test 4', () => {
  expect(binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1])).toEqual([
    [0, 1, 1, 0, 1, 1],
    [2, 5],
  ])
})
