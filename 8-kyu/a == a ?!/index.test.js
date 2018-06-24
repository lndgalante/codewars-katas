/* eslint eqeqeq: 0 */

const a = require('.')

test('Test 1', () => {
  expect(a == false).toBeTrue()
})

test('Test 2', () => {
  expect(!a == false).toBeTrue()
})

test('Test 3', () => {
  expect(a == !a).toBeTrue()
})
