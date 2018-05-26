const countBits = require('.')

test('Test 1', () => {
  expect(countBits(0)).toBe(0)
})

test('Test 2', () => {
  expect(countBits(4)).toBe(1)
})

test('Test 3', () => {
  expect(countBits(7)).toBe(3)
})

test('Test 4', () => {
  expect(countBits(9)).toBe(2)
})

test('Test 5', () => {
  expect(countBits(10)).toBe(2)
})
