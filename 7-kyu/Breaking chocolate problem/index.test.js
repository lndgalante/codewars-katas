const breakChocolate = require('./index.js')

test('Test 1', () => {
  expect(breakChocolate(5, 5)).toBe(24)
})

test('Test 2', () => {
  expect(breakChocolate(1, 1)).toBe(0)
})
