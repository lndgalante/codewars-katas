const getMissingElement = require('.')

test('Test 1', () => {
  expect(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])).toBe(8)
})

test('Test 2', () => {
  expect(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])).toBe(3)
})
