const makeParts = require('.')

test('Test 1', () => {
  expect(makeParts([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
})

test('Test 2', () => {
  expect(makeParts([1, 2, 3], 1)).toEqual([[1], [2], [3]])
})

test('Test 3', () => {
  expect(makeParts([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]])
})
