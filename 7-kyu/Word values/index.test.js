const wordValue = require('.')

test('Test 1', () => {
  expect(wordValue(['codewars', 'abc', 'xyz'])).toEqual([88, 12, 225])
})

test('Test 2', () => {
  expect(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])).toEqual([
    12,
    24,
    18,
    24,
  ])
})
