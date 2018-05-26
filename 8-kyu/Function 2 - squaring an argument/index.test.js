const square = require('.')

test('Test 1', () => {
  expect(square(4)).toBe(16)
})

test('Test 2', () => {
  expect(square(8)).toBe(64)
})
