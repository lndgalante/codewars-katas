const boolToWord = require('.')

test('Test 1', () => {
  expect(boolToWord(true)).toBe('Yes')
})

test('Test 2', () => {
  expect(boolToWord(false)).toBe('No')
})
