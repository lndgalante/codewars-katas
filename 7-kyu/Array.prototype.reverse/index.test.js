/* eslint no-unused-vars: 0 */

const Array = require('.')

test('Test 1', () => {
  expect([1, 2, 3, 4].reverse()).toEqual([4, 3, 2, 1])
})

test('Test 2', () => {
  expect(['a', 'b', 'c'].reverse()).toEqual(['c', 'b', 'a'])
})

test('Test 3', () => {
  expect([].reverse()).toEqual([])
})
