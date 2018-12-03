const findDup = require('.')

test('Test 1', () => {
  expect(findDup([1, 2, 2, 3])).toBe(2)
})

test('Test 2', () => {
  expect(findDup([1, 3, 2, 5, 4, 5, 7, 6])).toBe(5)
})
