/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const toAlternatingCase = require('.')

test('Test 1', () => {
  expect('hello world'.toAlternatingCase()).toBe('HELLO WORLD')
})

test('Test 2', () => {
  expect('HELLO WORLD'.toAlternatingCase()).toBe('hello world')
})

test('Test 3', () => {
  expect('hello WORLD'.toAlternatingCase()).toBe('HELLO world')
})

test('Test 4', () => {
  expect('HeLLo WoRLD'.toAlternatingCase()).toBe('hEllO wOrld')
})

test('Test 5', () => {
  expect('12345'.toAlternatingCase()).toBe('12345')
})

test('Test 6', () => {
  expect('1a2b3c4d5e'.toAlternatingCase()).toBe('1A2B3C4D5E')
})

test('Test 7', () => {
  expect('String.prototype.toAlternatingCase'.toAlternatingCase()).toBe(
    'sTRING.PROTOTYPE.TOaLTERNATINGcASE'
  )
})

test('Test 8', () => {
  expect('Hello World'.toAlternatingCase().toAlternatingCase()).toBe(
    'Hello World'
  )
})
