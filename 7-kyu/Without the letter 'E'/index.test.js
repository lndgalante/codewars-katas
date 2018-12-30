const findE = require('.')

test('Test 1', () => {
  expect(findE('e')).toBe('1')
})

test('Test 2', () => {
  expect(findE('English')).toBe('1')
})
