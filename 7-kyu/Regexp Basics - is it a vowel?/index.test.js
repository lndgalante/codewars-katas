/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect(''.vowel()).toBeFalse()
})

test('Test 2', () => {
  expect('a'.vowel()).toBeTrue()
})

test('Test 3', () => {
  expect('E'.vowel()).toBeTrue()
})

test('Test 4', () => {
  expect('ou'.vowel()).toBeFalse()
})

test('Test 5', () => {
  expect('z'.vowel()).toBeFalse()
})

test('Test 6', () => {
  expect('lol'.vowel()).toBeFalse()
})
