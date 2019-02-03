/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect(''.isLetter()).toBeFalse()
})

test('Test 2', () => {
  expect('a'.isLetter()).toBeTrue()
})

test('Test 3', () => {
  expect('X'.isLetter()).toBeTrue()
})

test('Test 4', () => {
  expect('7'.isLetter()).toBeFalse()
})

test('Test 5', () => {
  expect('*'.isLetter()).toBeFalse()
})

test('Test 6', () => {
  expect('ab'.isLetter()).toBeFalse()
})

test('Test 7', () => {
  expect('a\n'.isLetter()).toBeFalse()
})
