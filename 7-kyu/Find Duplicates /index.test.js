const duplicates = require('.')

test('Test 1', () => {
  expect(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])).toEqual([1, 4, 3])
})

test('Test 2', () => {
  expect(duplicates([0, 1, 2, 3, 4, 5])).toEqual([])
})
