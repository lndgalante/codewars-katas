/* eslint eqeqeq: 0 */

const a = require('./index.js')

test('Test 1', () => {
  expect(a == false).toBeTruthy()
})

test('Test 2', () => {
  expect(!a == false).toBeTruthy()
})

test('Test 3', () => {
  expect(a == !a).toBeTruthy()
})
