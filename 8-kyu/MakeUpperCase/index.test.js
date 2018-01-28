const makeUpperCase = require('./index.js')

test('Test 1', () => {
  expect(makeUpperCase('hello')).toBe('HELLO')
})
