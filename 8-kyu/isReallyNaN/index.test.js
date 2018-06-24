const isReallyNaN = require('.')

test('Test 1', () => {
  expect(isReallyNaN(37)).toBeFalse()
})

test('Test 2', () => {
  expect(isReallyNaN('37')).toBeFalse()
})

test('Test 3', () => {
  expect(isReallyNaN(NaN)).toBeTrue()
})

test('Test 4', () => {
  expect(isReallyNaN(undefined)).toBeFalse()
})
