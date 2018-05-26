const removeChar = require('.')

test('Test 1', () => {
  expect(removeChar('eloquent')).toBe('loquen')
})

test('Test 2', () => {
  expect(removeChar('country')).toBe('ountr')
})

test('Test 3', () => {
  expect(removeChar('person')).toBe('erso')
})

test('Test 4', () => {
  expect(removeChar('place')).toBe('lac')
})
