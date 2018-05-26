const findAverage = require('.')

test('Test 1', () => {
  expect(findAverage([1, 1, 1])).toBe(1)
})

test('Test 2', () => {
  expect(findAverage([1, 2, 3])).toBe(2)
})
