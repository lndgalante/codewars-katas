const unusedDigits = require('.')

test('Test 1', () => {
  expect(unusedDigits(12, 34, 56, 78)).toBe('09')
})

test('Test 2', () => {
  expect(unusedDigits(2015, 8, 26)).toBe('3479')
})
