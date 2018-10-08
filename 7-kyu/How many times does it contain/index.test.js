const stringCounter = require('.')

test('Test 1', () => {
  expect(stringCounter('Hello World!', 'o')).toBe(2)
})

test('Test 2', () => {
  expect(stringCounter('Do you like Harry Potter?', '?')).toBe(1)
})

test('Test 3', () => {
  expect(stringCounter('abcdefg', 'a')).toBe(1)
})
