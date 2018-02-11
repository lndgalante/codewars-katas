const repeatIt = require('./index.js')

test('Test 1', () => {
  expect(repeatIt('*', 3)).toBe('***')
})

test('Test 2', () => {
  expect(repeatIt('Hello', 11)).toBe(
    'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
  )
})
