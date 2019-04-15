const transposeTwoStrings = require('.')

test('Test 1', () => {
  expect(transposeTwoStrings(['Hello', 'World'])).toBe('H W\ne o\nl r\nl l\no d')
})

test('Test 2', () => {
  expect(transposeTwoStrings(['joey', 'louise'])).toBe('j l\no o\ne u\ny i\n  s\n  e')
})

test('Test 3', () => {
  expect(transposeTwoStrings(['a', 'cat'])).toBe('a c\n  a\n  t')
})

test('Test 4', () => {
  expect(transposeTwoStrings(['cat', ''])).toBe('c  \na  \nt  ')
})

test('Test 5', () => {
  expect(transposeTwoStrings(['!a!a!', '?b?b'])).toBe('! ?\na b\n! ?\na b\n!  ')
})
