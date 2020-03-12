/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */
/* eslint no-extend-native: 0 */

const Array = require('.')

test('Test 1', () => {
  const array = [0, 1, 2, 2, 3]
  expect(array.numberOfOccurrences(0)).toBe(1)
})

test('Test 2', () => {
  const array = [0, 1, 2, 2, 3]
  expect(array.numberOfOccurrences(4)).toBe(0)
})

test('Test 3', () => {
  const array = [0, 1, 2, 2, 3]
  expect(array.numberOfOccurrences(2)).toBe(2)
})

test('Test 4', () => {
  const array = [0, 1, 2, 2, 3]
  expect(array.numberOfOccurrences('a')).toBe(0)
})

test('Test 5', () => {
  const array = [4, 0, 4]
  expect(array.numberOfOccurrences(4)).toBe(2)
})
