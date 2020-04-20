const password = require('.')

test('Test 1', () => {
  expect(password('Abcd1234')).toBeTrue()
})

test('Test 2', () => {
  expect(password('Abcd123')).toBeFalse()
})

test('Test 3', () => {
  expect(password('abcd1234')).toBeFalse()
})

test('Test 4', () => {
  expect(password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890')).toBeTrue()
})

test('Test 5', () => {
  expect(password('ABCD1234')).toBeFalse()
})

test('Test 6', () => {
  expect(password('Ab1!@#$%^&*()-_+={}[]|:;?/>.<,')).toBeTrue()
})
