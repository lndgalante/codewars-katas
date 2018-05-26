const position = require('.')

test('Test 1', () => {
  expect(position('a')).toBe('Position of alphabet: 1')
})

test('Test 2', () => {
  expect(position('z')).toBe('Position of alphabet: 26')
})

test('Test 3', () => {
  expect(position('e')).toBe('Position of alphabet: 5')
})
