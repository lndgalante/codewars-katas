const removeExclamationMarks = require('.')

test('Test 1', () => {
  expect(removeExclamationMarks('Hello World!')).toBe('Hello World')
})

test('Test 2', () => {
  expect(removeExclamationMarks('Hello World!!!!!!')).toBe('Hello World')
})
