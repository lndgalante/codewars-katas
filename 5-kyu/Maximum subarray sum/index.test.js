const maxSequence = require('.')

test('Test 1', () => {
  expect(maxSequence([])).toBe(0)
})

test('Test 2', () => {
  expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})
