const shorterReverseLonger = require('.')

test('Test 1', () => {
  expect(shorterReverseLonger('first', 'abcde')).toBe('abcdetsrifabcde')
})

test('Test 2', () => {
  expect(shorterReverseLonger('hello', 'bau')).toBe('bauollehbau')
})

test('Test 3', () => {
  expect(shorterReverseLonger('abcde', 'fghi')).toBe('fghiedcbafghi')
})
