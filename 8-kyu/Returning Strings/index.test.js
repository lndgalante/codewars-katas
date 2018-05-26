const greet = require('.')

test('Test 1', () => {
  expect(greet('Ryan')).toBe('Hello, Ryan how are you doing today?')
})

test('Test 2', () => {
  expect(greet('Shingles')).toBe('Hello, Shingles how are you doing today?')
})
