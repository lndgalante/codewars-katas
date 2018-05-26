const findSum = require('.')

test('Test 1', () => {
  expect(findSum(5)).toBe(8)
})

test('Test 2', () => {
  expect(findSum(10)).toBe(33)
})
