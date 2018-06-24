const typeValidation = require('.')

test('Test 1', () => {
  expect(typeValidation(42, 'number')).toBeTrue()
})

test('Test 2', () => {
  expect(typeValidation('42', 'number')).toBeFalse()
})
