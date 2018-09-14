const say = require('.')

test('Test 1', () => {
  expect(say('Hello')('World')).toBe('Hello World')
})
