const isAllPossibilities = require('.')

test('Test 1', () => {
  expect(isAllPossibilities([0, 1, 2, 3])).toBeTrue()
})

test('Test 2', () => {
  expect(isAllPossibilities([1, 2, 3, 4])).toBeFalse()
})
