const toJadenCase = require('./index.js')

test('Test 1', () => {
  expect("How can mirrors be real if our eyes aren't real".toJadenCase()).toBe(
    "How Can Mirrors Be Real If Our Eyes Aren't Real"
  )
})
