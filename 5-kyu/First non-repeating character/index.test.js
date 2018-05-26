const firstNonRepeatingLetter = require('.')

test('Test 1', () => {
  expect(firstNonRepeatingLetter('a')).toBe('a')
})

test('Test 2', () => {
  expect(firstNonRepeatingLetter('stress')).toBe('t')
})

test('Test 3', () => {
  expect(firstNonRepeatingLetter('moonmen')).toBe('e')
})

test('Test 4', () => {
  expect(firstNonRepeatingLetter('sTreSS')).toBe('T')
})

test('Test 5', () => {
  expect(firstNonRepeatingLetter('')).toBe('')
})
