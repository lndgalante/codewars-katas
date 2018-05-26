const integrate = require('.')

test('Test 1', () => {
  expect(integrate(3, 2)).toBe('1x^3')
})

test('Test 2', () => {
  expect(integrate(9, 5)).toBe('1.5x^6')
})
