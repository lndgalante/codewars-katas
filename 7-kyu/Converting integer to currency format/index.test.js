const toCurrency = require('.')

test('Test 1', () => {
  expect(toCurrency(123456)).toBe('123,456')
})

test('Test 2', () => {
  expect(toCurrency(1234)).toBe('1,234')
})

test('Test 3', () => {
  expect(toCurrency(123)).toBe('123')
})

test('Test 4', () => {
  expect(toCurrency(123456789012)).toBe('123,456,789,012')
})
