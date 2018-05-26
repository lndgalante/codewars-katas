/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */
/* eslint no-extend-native: 0 */

const Array = require('.')

test('Test 1', () => {
  const arr = [0, 1, 2, 2, 3]
  expect(arr.numberOfOccurrences(0)).toBe(1)
})

test('Test 2', () => {
  const arr = [0, 1, 2, 2, 3]
  expect(arr.numberOfOccurrences(4)).toBe(0)
})

test('Test 3', () => {
  const arr = [0, 1, 2, 2, 3]
  expect(arr.numberOfOccurrences(2)).toBe(2)
})

test('Test 4', () => {
  const arr = [0, 1, 2, 2, 3]
  expect(arr.numberOfOccurrences('a')).toBe(0)
})

test('Test 5', () => {
  const arr = [4, 0, 4]
  expect(arr.numberOfOccurrences(4)).toBe(2)
})
