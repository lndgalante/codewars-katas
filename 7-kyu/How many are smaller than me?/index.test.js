const smaller = require('.')

test('Test 1', () => {
  expect(smaller([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0])
})

test('Test 2', () => {
  expect(smaller([1, 2, 3])).toEqual([0, 0, 0])
})

test('Test 3', () => {
  expect(smaller([1, 2, 0])).toEqual([1, 1, 0])
})

test('Test 4', () => {
  expect(smaller([1, 2, 1])).toEqual([0, 1, 0])
})

test('Test 5', () => {
  expect(smaller([1, 1, -1, 0, 0])).toEqual([3, 3, 0, 0, 0])
})

test('Test 6', () => {
  expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).toEqual([4, 1, 5, 5, 0, 0, 0, 0, 0])
})
