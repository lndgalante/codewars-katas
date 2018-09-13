/* eslint no-extend-native: 0 */
/* eslint no-identical-title: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const Array = require('.')

test('Test 1', () => {
  expect(Array.range(0, 3)).toEqual([0, 1, 2])
})

test('Test 2', () => {
  expect([0, 1, 2].sum()).toBe(3)
})

test('Test 3', () => {
  expect(Array.range(-1, 4).sum()).toBe(2)
})
