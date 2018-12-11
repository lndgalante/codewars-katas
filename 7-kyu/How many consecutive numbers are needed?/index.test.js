const consecutive = require('.')

test('Test 1', () => {
  expect(consecutive([4, 8, 6])).toBe(2)
})

test('Test 2', () => {
  expect(consecutive([1, 2, 3, 4])).toBe(0)
})

test('Test 3', () => {
  expect(consecutive([])).toBe(0)
})

test('Test 4', () => {
  expect(consecutive(1)).toBe(0)
})
