/* eslint no-unused-vars: 0 */
/* eslint no-implicit-coercion: 0 */

const Array = require('.')

test('Test 1', () => {
  expect([1, 2, 3] + 4).toBe(10)
})

test('Test 2', () => {
  expect([1, 1, 1] - 3).toBe(0)
})

test('Test 3', () => {
  expect(['a', 'b'] + ['c', 'd']).toBe('abcd')
})

test('Test 4', () => {
  expect('' + ['c', 'o', 'd', 'e', 'w', 'a', 'r', 's']).toBe('codewars')
})
