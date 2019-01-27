const validateTime = require('.')

test('Test 1', () => {
  expect(validateTime('01:00')).toBeTrue()
})

test('Test 2', () => {
  expect(validateTime('1:00')).toBeTrue()
})

test('Test 3', () => {
  expect(validateTime('00:00')).toBeTrue()
})

test('Test 4', () => {
  expect(validateTime('13:1')).toBeFalse()
})
