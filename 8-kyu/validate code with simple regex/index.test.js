const validateCode = require('.')

test('Test 1', () => {
  expect(validateCode(123)).toBeTrue()
})

test('Test 2', () => {
  expect(validateCode(248)).toBeTrue()
})

test('Test 3', () => {
  expect(validateCode(8)).toBeFalse()
})

test('Test 4', () => {
  expect(validateCode(321)).toBeTrue()
})

test('Test 5', () => {
  expect(validateCode(9453)).toBeFalse()
})
