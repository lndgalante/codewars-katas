const nato = require('.')

test('Test 1', () => {
  expect(nato('hi')).toBe('Hotel India')
})

test('Test 2', () => {
  expect(nato('abc')).toBe('Alpha Bravo Charlie')
})
