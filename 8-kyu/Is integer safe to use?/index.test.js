const safeInteger = require('.')

test('Test 1', () => {
  expect(safeInteger(9007199254740992)).toBeFalse()
})

test('Test 2', () => {
  expect(safeInteger(9007199254740990)).toBeTrue()
})
