const findAverage = require('.')

test('Test 1', () => {
  expect(findAverage([1])).toBe(1)
})

test('Test 2', () => {
  expect(findAverage([1, 3, 5, 7])).toBe(4)
})
