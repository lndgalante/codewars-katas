const validateWord = require('.')

test('Test 1', () => {
  expect(validateWord('abcabc')).toBeTrue()
})

test('Test 2', () => {
  expect(validateWord('Abcabc')).toBeTrue()
})

test('Test 3', () => {
  expect(validateWord('abc123')).toBeTrue()
})

test('Test 4', () => {
  expect(validateWord('abcabcd')).toBeFalse()
})

test('Test 5', () => {
  expect(validateWord('abc!abc!')).toBeTrue()
})

test('Test 6', () => {
  expect(validateWord('abc:abc')).toBeFalse()
})
