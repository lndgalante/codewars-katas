const myFunction = require('.')

test('Test 1', () => {
  expect(myFunction().objMethod()).toBe('string', 'myFunction did not return "string"')
})
