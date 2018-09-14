const getIssuer = require('.')

test('Test 1', () => {
  expect(getIssuer(4111111111111111)).toBe('VISA')
})

test('Test 2', () => {
  expect(getIssuer(378282246310005)).toBe('AMEX')
})

test('Test 3', () => {
  expect(getIssuer(6011111111111117)).toBe('Discover')
})

test('Test 4', () => {
  expect(getIssuer(9111111111111111)).toBe('Unknown')
})
