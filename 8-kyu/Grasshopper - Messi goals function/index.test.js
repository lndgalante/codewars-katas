const goals = require('.')

test('Test 1', () => {
  expect(goals(0, 0, 0)).toBe(0)
})

test('Test 2', () => {
  expect(goals(43, 10, 5)).toBe(58)
})
