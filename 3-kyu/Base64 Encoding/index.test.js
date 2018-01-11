/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('./index.js')

test('Test 1', () => {
  expect('this is a string!!'.toBase64()).toBe('dGhpcyBpcyBhIHN0cmluZyEh')
})

test('Test 2', () => {
  expect('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64()).toBe('this is a string!!')
})
