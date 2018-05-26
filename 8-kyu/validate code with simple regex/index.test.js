const validateCode = require('.')

test('Test 1', () => {
  expect(validateCode(123)).toBeTruthy()
})

test('Test 2', () => {
  expect(validateCode(248)).toBeTruthy()
})

test('Test 3', () => {
  expect(validateCode(8)).toBeFalsy()
})

test('Test 4', () => {
  expect(validateCode(321)).toBeTruthy()
})

test('Test 5', () => {
  expect(validateCode(9453)).toBeFalsy()
})
