const validatePIN = require('./index.js')

test('Test 1', () => {
  expect(validatePIN('1')).toBeFalsy()
})

test('Test 2', () => {
  expect(validatePIN('12')).toBeFalsy()
})

test('Test 3', () => {
  expect(validatePIN('123')).toBeFalsy()
})

test('Test 4', () => {
  expect(validatePIN('1234')).toBeTruthy()
})

test('Test 5', () => {
  expect(validatePIN('12345')).toBeFalsy()
})

test('Test 6', () => {
  expect(validatePIN('1234567')).toBeFalsy()
})

test('Test 7', () => {
  expect(validatePIN('-1234')).toBeFalsy()
})

test('Test 8', () => {
  expect(validatePIN('-1.234')).toBeFalsy()
})

test('Test 8', () => {
  expect(validatePIN('00000000')).toBeFalsy()
})

test('Test 8', () => {
  expect(validatePIN('a234')).toBeFalsy()
})
