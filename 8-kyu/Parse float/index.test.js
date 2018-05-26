const parseF = require('.')

test('Test 1', () => {
  expect(parseF('1')).toBe(1.0)
})

test('Test 2', () => {
  expect(parseF('dds1.d')).toBeNull()
})
