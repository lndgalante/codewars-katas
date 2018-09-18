const longestWord = require('.')

test('Test 1', () => {
  expect(longestWord('a b c d e fgh')).toBe('fgh')
})

test('Test 2', () => {
  expect(longestWord('one two three')).toBe('three')
})

test('Test 3', () => {
  expect(longestWord('red blue grey')).toBe('grey')
})
