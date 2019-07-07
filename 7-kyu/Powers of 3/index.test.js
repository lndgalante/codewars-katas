const largestPower = require('.')

test('Test 1', () => {
  expect(largestPower(3)).toBe(0)
})

test('Test 2', () => {
  expect(largestPower(5)).toBe(1)
})

test('Test 3', () => {
  expect(largestPower(7)).toBe(1)
})

test('Test 4', () => {
  expect(largestPower(81)).toBe(3)
})

test('Test 5', () => {
  expect(largestPower(82)).toBe(4)
})
