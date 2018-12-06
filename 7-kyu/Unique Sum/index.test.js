const uniqueSum = require('.')

test('Test 1', () => {
  expect(uniqueSum([1, 2, 3])).toBe(6)
})

test('Test 2', () => {
  expect(uniqueSum([1, 3, 8, 1, 8])).toBe(12)
})

test('Test 3', () => {
  expect(uniqueSum([-1, -1, 5, 2, -7])).toBe(-1)
})

test('Test 4', () => {
  expect(uniqueSum([])).toBeNull()
})
