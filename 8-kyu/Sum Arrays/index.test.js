const sum = require('.')

test('Test 1', () => {
  expect(sum([])).toBe(0)
})

test('Test 2', () => {
  expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2)
})
