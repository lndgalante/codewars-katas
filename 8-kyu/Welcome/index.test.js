const greet = require('.')

test('Test 1', () => {
  expect(greet('english')).toBe('Welcome')
})

test('Test 2', () => {
  expect(greet('dutch')).toBe('Welkom')
})

test('Test 3', () => {
  expect(greet('IP_ADDRESS_INVALID')).toBe('Welcome')
})
