/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect(''.whitespace()).toBeTrue()
})

test('Test 2', () => {
  expect(' '.whitespace()).toBeTrue()
})

test('Test 3', () => {
  expect('\n\r\n\r'.whitespace()).toBeTrue()
})

test('Test 4', () => {
  expect('a'.whitespace()).toBeFalse()
})

test('Test 5', () => {
  expect('w\n'.whitespace()).toBeFalse()
})

test('Test 6', () => {
  expect('\t'.whitespace()).toBeTrue()
})

test('Test 7', () => {
  expect(' a\n'.whitespace()).toBeFalse()
})

test('Test 8', () => {
  expect('\t \n\r\n  '.whitespace()).toBeTrue()
})

test('Test 9', () => {
  expect('\n\r\n\r '.whitespace()).toBeTrue()
})

test('Test 10', () => {
  expect('\n\r\n\r 3'.whitespace()).toBeFalse()
})
