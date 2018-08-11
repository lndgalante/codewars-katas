const hasUniqueChars = require('.')

test('Test 1', () => {
  expect(hasUniqueChars('  nAa')).toBeFalse()
})

test('Test 2', () => {
  expect(hasUniqueChars('abcdef')).toBeTrue()
})

test('Test 3', () => {
  expect(hasUniqueChars('++-')).toBeFalse()
})
