const arraySum = require('.')

test('Test 1', () => {
  expect(arraySum([1, 2])).toBe(3)
})

test('Test 2', () => {
  expect(arraySum([1, 2, 3])).toBe(6)
})

test('Test 3', () => {
  expect(arraySum([1, 2, [1, 2]])).toBe(6)
})
