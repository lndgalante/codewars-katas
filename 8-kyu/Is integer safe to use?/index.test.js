const safeInteger = require('.')

test('Test 1', () => {
  expect(safeInteger(9007199254740992)).toBeFalsy()
})

test('Test 2', () => {
  expect(safeInteger(9007199254740990)).toBeTruthy()
})
