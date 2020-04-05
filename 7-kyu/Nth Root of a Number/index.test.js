const root = require('.')

test('Test 1', () => {
  expect(root(8, 3)).toBe(2)
})

test('Test 2', () => {
  expect(root(6.25, 2)).toBe(2.5)
})
