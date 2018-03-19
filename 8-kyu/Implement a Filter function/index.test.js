/* eslint no-unused-vars: 0 */

const Array = require('./index.js')

test('Test 1', () => {
  expect([1, 2, 3, 4].filter(num => num > 3)).toEqual([4])
})
