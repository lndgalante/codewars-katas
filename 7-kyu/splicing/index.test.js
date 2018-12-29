/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const Array = require('.')

test('Test 1', () => {
  expect([1, 2, 3, 1].removeValue(2)).toEqual([1, 3, 1])
})

test('Test 2', () => {
  expect([1, 2, 3, 1].removeValue(1)).toEqual([2, 3])
})
