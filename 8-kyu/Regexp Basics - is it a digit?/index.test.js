/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const digit = require('./index.js')

test('Test 1', () => {
  expect(''.digit()).toBeFalsy()
})

test('Test 2', () => {
  expect('7'.digit()).toBeTruthy()
})

test('Test 3', () => {
  expect(' '.digit()).toBeFalsy()
})

test('Test 4', () => {
  expect('a'.digit()).toBeFalsy()
})

test('Test 5', () => {
  expect('a5'.digit()).toBeFalsy()
})

test('Test 6', () => {
  expect('14'.digit()).toBeFalsy()
})
