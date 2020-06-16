const displayLargeNumber = require('.')

test('Test 1', () => {
  expect(displayLargeNumber(1234)).toBe('1,234')
})
