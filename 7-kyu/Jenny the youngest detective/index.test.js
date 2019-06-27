const missingWord = require('.')

test('Test 1', () => {
  expect(missingWord([5, 0, 3], 'I love you')).toBe('ivy')
})

test('Test 2', () => {
  expect(missingWord([29, 31, 8], 'The quick brown fox jumps over the lazy dog')).toBe('bay')
})

test('Test 3', () => {
  expect(missingWord([12, 4, 6], 'Good Morning')).toBe('No mission today')
})
