const enough = require('.')

test('Test 1', () => {
  expect(enough(10, 5, 5)).toBe(0)
})

test('Test 2', () => {
  expect(enough(100, 60, 50)).toBe(10)
})
