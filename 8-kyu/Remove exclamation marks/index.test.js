const removeExclamationMarks = require('./index.js')

test('Test 1', () => {
  expect(removeExclamationMarks('Hello World!')).toBe('Hello World')
})

test('Test 2', () => {
  expect(removeExclamationMarks('Hello World!!!!!!')).toBe('Hello World')
})
