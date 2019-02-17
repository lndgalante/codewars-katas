const magicSum = require('.')

test('Test 1', () => {
  expect(magicSum([3])).toBe(3)
})

test('Test 2', () => {
  expect(magicSum([3, 13])).toBe(16)
})

test('Test 3', () => {
  expect(magicSum([30, 34, 330])).toBe(0)
})

test('Test 4', () => {
  expect(magicSum([3, 12, 5, 8, 30, 13])).toBe(16)
})

test('Test 5', () => {
  expect(magicSum([])).toBe(0)
})
