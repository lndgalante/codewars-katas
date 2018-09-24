const isDigit = require('.')

test('Test 1', () => {
  expect(isDigit('s2324')).toBeFalse()
})

test('Test 2', () => {
  expect(isDigit('-234.4')).toBeTrue()
})
