const typeValidation = require('./index.js')

test('Test 1', () => {
  expect(typeValidation(42, 'number')).toBeTruthy()
})

test('Test 2', () => {
  expect(typeValidation('42', 'number')).toBeFalsy()
})
