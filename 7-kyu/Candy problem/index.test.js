const candies = require('.')

test('Test 1', () => {
  expect(candies([5, 8, 6, 4])).toBe(9)
})

test('Test 2', () => {
  expect(candies([1, 2, 4, 6])).toBe(11)
})

test('Test 3', () => {
  expect(candies([1, 2])).toBe(1)
})

test('Test 4', () => {
  expect(candies([4, 2])).toBe(2)
})
