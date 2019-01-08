const encode = require('.')

test('Test 1', () => {
  expect(encode('abc')).toBe('123')
})

test('Test 2', () => {
  expect(encode('ABCD')).toBe('1234')
})

test('Test 3', () => {
  expect(encode('ZzzzZ')).toBe('2626262626')
})

test('Test 4', () => {
  expect(encode('abc-#@5')).toBe('123-#@5')
})
