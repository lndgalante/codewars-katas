const greet = require('./index.js')

test('Test 1', () => {
  expect(greet('Daniel', 'Daniel')).toBe('Hello boss')
})

test('Test 2', () => {
  expect(greet('Greg', 'Daniel')).toBe('Hello guest')
})
