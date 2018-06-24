const validatePIN = require('.')

test('Test 1', () => {
  expect(validatePIN('1')).toBeFalse()
})

test('Test 2', () => {
  expect(validatePIN('12')).toBeFalse()
})

test('Test 3', () => {
  expect(validatePIN('123')).toBeFalse()
})

test('Test 4', () => {
  expect(validatePIN('1234')).toBeTrue()
})

test('Test 5', () => {
  expect(validatePIN('12345')).toBeFalse()
})

test('Test 6', () => {
  expect(validatePIN('1234567')).toBeFalse()
})

test('Test 7', () => {
  expect(validatePIN('-1234')).toBeFalse()
})

test('Test 8', () => {
  expect(validatePIN('-1.234')).toBeFalse()
})

test('Test 9', () => {
  expect(validatePIN('00000000')).toBeFalse()
})

test('Test 10', () => {
  expect(validatePIN('a234')).toBeFalse()
})
