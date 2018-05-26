const summation = require('.')

test('Test 1', () => {
  expect(summation(1)).toBe(1)
})

test('Test 2', () => {
  expect(summation(8)).toBe(36)
})
