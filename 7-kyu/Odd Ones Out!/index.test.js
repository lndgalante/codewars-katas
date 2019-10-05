const oddOnesOut = require('.')

test('Test 1', () => {
  expect(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])).toEqual([44, 79, 50, 44, 79, 50])
})

test('Test 2', () => {
  expect(oddOnesOut([1, 2, 3, 1, 3, 3])).toEqual([1, 1])
})

test('Test 3', () => {
  expect(oddOnesOut([75, 68, 75, 47, 68])).toEqual([75, 68, 75, 68])
})

test('Test 4', () => {
  expect(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])).toEqual([67, 67])
})

test('Test 5', () => {
  expect(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])).toEqual([100, 100, 100, 100])
})
