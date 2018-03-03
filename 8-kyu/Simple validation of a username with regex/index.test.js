const validateUsr = require('./index.js')

test('Test 1', () => {
  expect(validateUsr('asddsa')).toBeTruthy()
})

test('Test 2', () => {
  expect(validateUsr('a')).toBeFalsy()
})

test('Test 3', () => {
  expect(validateUsr('Hass')).toBeFalsy()
})

test('Test 4', () => {
  expect(validateUsr('Hasd_12assssssasasasasasaasasasasas')).toBeFalsy()
})

test('Test 5', () => {
  expect(validateUsr('')).toBeFalsy()
})

test('Test 6', () => {
  expect(validateUsr('____')).toBeTruthy()
})

test('Test 7', () => {
  expect(validateUsr('012')).toBeFalsy()
})

test('Test 8', () => {
  expect(validateUsr('p1pp1')).toBeTruthy()
})

test('Test 9', () => {
  expect(validateUsr('asd43 34')).toBeFalsy()
})

test('Test 10', () => {
  expect(validateUsr('asd43_34')).toBeTruthy()
})
