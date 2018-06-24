const validateHello = require('.')

test('Test 1', () => {
  expect(validateHello('ahoj')).toBeTrue()
})

test('Test 2', () => {
  expect(validateHello('meh')).toBeFalse()
})
