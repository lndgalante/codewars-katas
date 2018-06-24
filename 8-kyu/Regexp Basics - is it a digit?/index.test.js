/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const digit = require('.')

test('Test 1', () => {
  expect(''.digit()).toBeFalse()
})

test('Test 2', () => {
  expect('7'.digit()).toBeTrue()
})

test('Test 3', () => {
  expect(' '.digit()).toBeFalse()
})

test('Test 4', () => {
  expect('a'.digit()).toBeFalse()
})

test('Test 5', () => {
  expect('a5'.digit()).toBeFalse()
})

test('Test 6', () => {
  expect('14'.digit()).toBeFalse()
})
