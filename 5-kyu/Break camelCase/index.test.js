const breakCamelCase = require('./index.js')

test('Test 1', () => {
  expect(breakCamelCase('camelCasing')).toBe('camel Casing')
})
