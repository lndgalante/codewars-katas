const sum = require('.')

test('Test 1', () => {
  expect(sum(2, 3)).toBe(5)
})

test('Test 2', () => {
  expect(sum(3)(3)).toBe(6)
})
