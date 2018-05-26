const combat = require('.')

test('Test 1', () => {
  expect(combat(100, 5)).toBe(95)
})

test('Test 2', () => {
  expect(combat(92, 8)).toBe(84)
})

test('Test 3', () => {
  expect(combat(20, 30)).toBe(0)
})
