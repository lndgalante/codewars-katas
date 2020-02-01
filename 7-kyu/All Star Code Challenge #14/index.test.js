const median = require('.')

test('Test 1', () => {
  expect(median([33, 99, 100, 30, 29, 50])).toBe(41.5)
})

test('Test 2', () => {
  expect(median([3, 2, 1])).toBe(2)
})
