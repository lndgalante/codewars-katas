const minSum = require('.')

test('Test 1', () => {
  expect(minSum([5, 4, 2, 3])).toBe(22)
})

test('Test 2', () => {
  expect(minSum([12, 6, 10, 26, 3, 24])).toBe(342)
})

test('Test 3', () => {
  expect(minSum([9, 2, 8, 7, 5, 4, 0, 6])).toBe(74)
})
