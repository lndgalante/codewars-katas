const last = require('.')

test('Test 1', () => {
  expect(last([1, 2, 3])).toBe(3)
})

test('Test 2', () => {
  expect(last([])).toBe(null)
})
