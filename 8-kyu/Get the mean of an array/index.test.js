const getAverage = require('.')

test('Test 1', () => {
  expect(getAverage([2, 2, 2, 2])).toBe(2)
})

test('Test 2', () => {
  expect(getAverage([1, 2, 3, 4, 5])).toBe(3)
})

test('Test 3', () => {
  expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1)
})
