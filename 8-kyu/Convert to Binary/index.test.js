const toBinary = require('.')

test('Test 1', () => {
  expect(toBinary(1)).toBe(1)
})

test('Test 2', () => {
  expect(toBinary(2)).toBe(10)
})

test('Test 3', () => {
  expect(toBinary(3)).toBe(11)
})

test('Test 4', () => {
  expect(toBinary(5)).toBe(101)
})
