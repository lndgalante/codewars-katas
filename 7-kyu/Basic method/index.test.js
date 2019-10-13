/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const Array = require('.')

test('Test 1', () => {
  expect([2, 5, 1, 3].max()).toBe(5)
})
