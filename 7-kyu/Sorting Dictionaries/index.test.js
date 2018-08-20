const sortDict = require('.')

test('Test 1', () => {
  expect(sortDict({ 1: 3, 2: 2, 3: 1 })).toEqual([[1, 3], [2, 2], [3, 1]])
})

test('Test 2', () => {
  expect(sortDict({ 1: 2, 2: 4, 3: 6 })).toEqual([[3, 6], [2, 4], [1, 2]])
})

test('Test 3', () => {
  expect(sortDict({ A: 2, K: 4, Z: 6 })).toEqual([['Z', 6], ['K', 4], ['A', 2]])
})
