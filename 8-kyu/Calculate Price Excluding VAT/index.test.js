const excludingVatPrice = require('.')

test('Test 1', () => {
  expect(excludingVatPrice(230)).toBe(200.0)
})

test('Test 2', () => {
  expect(excludingVatPrice(123)).toBe(106.96)
})
