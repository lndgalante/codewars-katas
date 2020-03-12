/* eslint no-unused-vars: 0 */

const toJadenCase = require('.')

test('Test 1', () => {
  const jadened = `How can mirrors be real if our eyes aren’t real`.toJadenCase()
  expect(jadened).toBe(`How Can Mirrors Be Real If Our Eyes Aren’t Real`)
})
