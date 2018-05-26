const reverseWords = require('.')

test('Test 1', () => {
  expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe(
    'ehT kciuq nworb xof spmuj revo eht yzal .god'
  )
})

test('Test 2', () => {
  expect(reverseWords('apple')).toBe('elppa')
})

test('Test 3', () => {
  expect(reverseWords('a b c d')).toBe('a b c d')
})

test('Test 4', () => {
  expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow')
})
