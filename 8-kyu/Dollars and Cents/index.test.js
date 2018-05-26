const formatMoney = require('.')

test('Test 1', () => {
  expect(formatMoney(3)).toBe('$3.00')
})

test('Test 2', () => {
  expect(formatMoney(3.1)).toBe('$3.10')
})

test('Test 3', () => {
  expect(formatMoney(39.99)).toBe('$39.99')
})
