const charConcat = require('.')

test('Test 1', () => {
  expect(charConcat('abc def')).toBe('af1be2cd3')
})

test('Test 2', () => {
  expect(charConcat('CodeWars')).toBe('Cs1or2da3eW4')
})
