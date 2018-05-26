const sayHello = require('.')

test('Test 1', () => {
  expect(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')).toBe(
    'Hello, John Smith! Welcome to Phoenix, Arizona!'
  )
})
