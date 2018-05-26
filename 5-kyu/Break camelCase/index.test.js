const breakCamelCase = require('.')

test('Test 1', () => {
  expect(breakCamelCase('camelCasing')).toBe('camel Casing')
})
