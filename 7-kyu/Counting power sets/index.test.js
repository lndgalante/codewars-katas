const powers = require('.')

test('Test 1', () => {
  expect(powers([])).toBe(1)
})

test('Test 2', () => {
  expect(powers([1])).toBe(2)
})

test('Test 3', () => {
  expect(powers([1, 2])).toBe(4)
})

test('Test 4', () => {
  expect(powers([1, 2, 3, 4])).toBe(16)
})
