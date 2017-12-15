const greet = require('./index.js')

test('Test  1', () => {
  expect(greet()).toBe('hello world!')
})
