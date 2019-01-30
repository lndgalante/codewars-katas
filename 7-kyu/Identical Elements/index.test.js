const duplicateElements = require('.')

test('Test 1', () => {
  expect(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])).toBeTrue()
})

test('Test 2', () => {
  expect(duplicateElements([9, 8, 7], [8, 1, 3])).toBeTrue()
})
