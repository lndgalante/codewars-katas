/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const Array = require('.')

test('Test 1', () => {
  expect([1, 2, 3, 4].sum()).toBe(10)
})

test('Test 2', () => {
  expect([2, 4, 6, 8].sum()).toBe(20)
})

test('Test 3', () => {
  expect([93, 31, 62, 103].sum()).toBe(289)
})

test('Test 4', () => {
  expect([397, 403, 764, 142].sum()).toBe(1706)
})
