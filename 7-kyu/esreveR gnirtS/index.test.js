/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect('String'.reverse()).toBe('gnirtS')
})

test('Test 2', () => {
  expect('Super awesome string'.reverse()).toBe('gnirts emosewa repuS')
})
