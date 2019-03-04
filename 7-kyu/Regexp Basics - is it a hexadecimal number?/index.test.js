/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect(''.hexNumber()).toBeFalse()
})

test('Test 2', () => {
  expect('0x'.hexNumber()).toBeFalse()
})

test('Test 3', () => {
  expect('0'.hexNumber()).toBeTrue()
})

test('Test 4', () => {
  expect('0xDEADBEEF'.hexNumber()).toBeTrue()
})

test('Test 5', () => {
  expect('1337bAbe'.hexNumber()).toBeTrue()
})
