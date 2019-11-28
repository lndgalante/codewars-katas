const makeEveryLetterAfterXCaps = require('.')

test('Test 1', () => {
  expect(makeEveryLetterAfterXCaps('bac', 'a')).toBe('baC')
})

test('Test 2', () => {
  expect(makeEveryLetterAfterXCaps('and the cow jumped over the moon', 'n')).toBe('anD the cow jumped over the moon')
})

test('Test 3', () => {
  expect(makeEveryLetterAfterXCaps('where are they now', ' ')).toBe('where Are They Now')
})
