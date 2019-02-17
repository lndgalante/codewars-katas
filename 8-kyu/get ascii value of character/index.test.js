const getASCII = require('.')

test('Test 1', () => {
  expect(getASCII('A')).toBe(65)
})

test('Test 2', () => {
  expect(getASCII(' ')).toBe(32)
})

test('Test 3', () => {
  expect(getASCII('!')).toBe(33)
})
