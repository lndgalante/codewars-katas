const validateUsr = require('.')

test('Test 1', () => {
  expect(validateUsr('asddsa')).toBeTrue()
})

test('Test 2', () => {
  expect(validateUsr('a')).toBeFalse()
})

test('Test 3', () => {
  expect(validateUsr('Hass')).toBeFalse()
})

test('Test 4', () => {
  expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toBeFalse()
})

test('Test 5', () => {
  expect(validateUsr('')).toBeFalse()
})

test('Test 6', () => {
  expect(validateUsr('____')).toBeTrue()
})

test('Test 7', () => {
  expect(validateUsr('012')).toBeFalse()
})

test('Test 8', () => {
  expect(validateUsr('p1pp1')).toBeTrue()
})

test('Test 9', () => {
  expect(validateUsr('asd43 34')).toBeFalse()
})

test('Test 10', () => {
  expect(validateUsr('asd43_34')).toBeTrue()
})
