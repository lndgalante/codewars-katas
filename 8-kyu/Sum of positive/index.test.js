const positiveSum = require('.')

test('Test 1', () => {
  expect(positiveSum([1, 2, 3, 4, 5])).toBe(15)
})

test('Test 2', () => {
  expect(positiveSum([1, -2, 3, 4, 5])).toBe(13)
})

test('Test 3', () => {
  expect(positiveSum([])).toBe(0)
})

test('Test 4', () => {
  expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0)
})

test('Test 5', () => {
  expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9)
})
