const makeUpperCase = require('.')

test('Test 1', () => {
  expect(makeUpperCase('hello')).toBe('HELLO')
})
