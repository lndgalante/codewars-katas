const incrementer = require('.')

test('Test 1', () => {
  expect(incrementer([])).toEqual([])
})

test('Test 2', () => {
  expect(incrementer([1, 2, 3])).toEqual([2, 4, 6])
})

test('Test 3', () => {
  expect(incrementer([4, 6, 7, 1, 3])).toEqual([5, 8, 0, 5, 8])
})

test('Test 4', () => {
  expect(incrementer([3, 6, 9, 8, 9])).toEqual([4, 8, 2, 2, 4])
})

test('Test 5', () => {
  expect(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])).toEqual([2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2])
})
