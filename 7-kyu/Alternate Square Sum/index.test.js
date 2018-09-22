const alternateSqSum = require('.')

test('Test 1', () => {
  expect(alternateSqSum([])).toBe(0)
})

test('Test 2', () => {
  expect(alternateSqSum([1, 2, 3, 4, 5])).toBe(29)
})

test('Test 3', () => {
  expect(alternateSqSum([-1, 0, -3, 0, -5, 3])).toBe(0)
})

test('Test 4', () => {
  expect(alternateSqSum([-1, 2, -3, 4, -5])).toBe(11)
})
