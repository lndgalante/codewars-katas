const grow = require('.')

test('Test 1', () => {
  expect(grow([1, 2, 3])).toBe(6)
})

test('Test 2', () => {
  expect(grow([4, 1, 1, 1, 4])).toBe(16)
})

test('Test 3', () => {
  expect(grow([2, 2, 2, 2, 2, 2])).toBe(64)
})
