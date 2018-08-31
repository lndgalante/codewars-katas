const getSlope = require('.')

test('Test 1', () => {
  expect(getSlope([1, 1], [2, 2])).toBe(1)
})

test('Test 2', () => {
  expect(getSlope([11, 1], [1, 11])).toBe(-1)
})

test('Test 3', () => {
  expect(getSlope([1, 1], [1, 2])).toBeNull()
})

test('Test 4', () => {
  expect(getSlope([1, 1], [1, 1])).toBeNull()
})
