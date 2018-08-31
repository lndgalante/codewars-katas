const greet = require('.')

test('Test 1', () => {
  expect(greet('Niks')).toBe('hello Niks!')
})

test('Test 2', () => {
  expect(greet(null)).toBeNull()
})
