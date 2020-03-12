/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const Array = require('.')

const isGreaterThanZero = number => number > 0
const isLessThanZero = number => number < 0

test('Test 1', () => {
  expect([1, 2, 3].all(isGreaterThanZero)).toBeTrue()
})

test('Test 2', () => {
  expect([-1, 0, 2].all(isGreaterThanZero)).toBeFalse()
})

test('Test 3', () => {
  expect([-1, 2, 3].none(isLessThanZero)).toBeFalse()
})

test('Test 4', () => {
  expect([-1, -2, -3].none(isGreaterThanZero)).toBeTrue()
})

test('Test 5', () => {
  expect([-1, 2, 3].any(isGreaterThanZero)).toBeTrue()
})

test('Test 6', () => {
  expect([-1, -2, -3].any(isGreaterThanZero)).toBeFalse()
})
