const shorter_reverse_longer = require('.')

test('Test 1', () => {
  expect(shorter_reverse_longer('first', 'abcde')).toBe('abcdetsrifabcde')
})

test('Test 2', () => {
  expect(shorter_reverse_longer('hello', 'bau')).toBe('bauollehbau')
})

test('Test 3', () => {
  expect(shorter_reverse_longer('abcde', 'fghi')).toBe('fghiedcbafghi')
})
