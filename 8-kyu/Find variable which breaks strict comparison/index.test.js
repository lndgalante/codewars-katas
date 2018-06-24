/* eslint no-negated-condition: 0 */
/* eslint no-self-compare: 0 */

const findStrangeValue = require('.')

test('Test 1', () => {
  const x = findStrangeValue()
  const testPassed = !(x === x)

  expect(testPassed).toBeTrue()
})
