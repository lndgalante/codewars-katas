const maxDiff = require('.')

test('Test 1', () => {
  expect(maxDiff([0, 1, 2, 3, 4, 5, 6])).toBe(6)
})

test('Test 2', () => {
  expect(maxDiff([-0, 1, 2, -3, 4, 5, -6])).toBe(11)
})

test('Test 3', () => {
  expect(maxDiff([0, 1, 2, 3, 4, 5, 16])).toBe(16)
})

test('Test 4', () => {
  expect(maxDiff([16])).toBe(0)
})

test('Test 5', () => {
  expect(maxDiff([])).toBe(0)
})
