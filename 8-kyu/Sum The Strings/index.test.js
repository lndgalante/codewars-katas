const sumStr = require('.')

test('Test 1', () => {
  expect(sumStr('4', '5')).toBe('9')
})

test('Test 2', () => {
  expect(sumStr('34', '5')).toBe('39')
})
