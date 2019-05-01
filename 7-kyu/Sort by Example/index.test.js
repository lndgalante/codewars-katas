const exampleSort = require('.')

test('Test 1', () => {
  expect(exampleSort([1, 2, 3, 4, 5], [2, 3, 4, 1, 5])).toEqual([2, 3, 4, 1, 5])
})

test('Test 2', () => {
  expect(exampleSort([1, 2, 3, 3, 3, 4, 5], [2, 3, 4, 1, 5])).toEqual([2, 3, 3, 3, 4, 1, 5])
})

test('Test 3', () => {
  expect(exampleSort([1, 2, 3, 3, 3, 5], [2, 3, 4, 1, 5])).toEqual([2, 3, 3, 3, 1, 5])
})
