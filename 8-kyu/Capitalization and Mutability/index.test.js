const capitalizeWord = require('.')

test('Test 1', () => {
  expect(capitalizeWord('word')).toBe('Word')
})

test('Test 2', () => {
  expect(capitalizeWord('i')).toBe('I')
})

test('Test 3', () => {
  expect(capitalizeWord('glasswear')).toBe('Glasswear')
})
