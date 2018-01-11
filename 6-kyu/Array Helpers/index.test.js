/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const Array = require('./index.js')

test('Test 1', () => {
  expect([1, 2, 3, 4, 5].square()).toEqual([1, 4, 9, 16, 25])
})

test('Test 2', () => {
  expect([1, 2, 3, 4, 5].cube()).toEqual([1, 8, 27, 64, 125])
})

test('Test 3', () => {
  expect([1, 2, 3, 4, 5].average()).toBe(3)
})

test('Test 4', () => {
  expect([1, 2, 3, 4, 5].sum()).toBe(15)
})

test('Test 5', () => {
  expect([1, 2, 3, 4, 5].even()).toEqual([2, 4])
})

test('Test 6', () => {
  expect([1, 2, 3, 4, 5].odd()).toEqual([1, 3, 5])
})
