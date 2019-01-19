const spacify = require('.')

test('Test 1', () => {
  expect(spacify('hello world')).toBe('h e l l o   w o r l d')
})

test('Test 2', () => {
  expect(spacify('12345')).toBe('1 2 3 4 5')
})
