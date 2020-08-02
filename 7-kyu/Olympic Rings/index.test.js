const olympicRing = require('.')

test('Test 1', () => {
  expect(olympicRing('wHjMudLwtoPGocnJ')).toBe('Bronze!')
})

test('Test 2', () => {
  expect(olympicRing('eCEHWEPwwnvzMicyaRjk')).toBe('Bronze!')
})

test('Test 3', () => {
  expect(olympicRing('JKniLfLW')).toBe('Not even a medal!')
})
