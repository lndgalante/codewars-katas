const isReallyNaN = require('.')

test('Test 1', () => {
  expect(isReallyNaN(37)).toBeFalsy()
})

test('Test 2', () => {
  expect(isReallyNaN('37')).toBeFalsy()
})

test('Test 3', () => {
  expect(isReallyNaN(NaN)).toBeTruthy()
})

test('Test 4', () => {
  expect(isReallyNaN(undefined)).toBeFalsy()
})
