const arrMultiply = require('.')

test('Test 1', () => {
  expect(arrMultiply(['4', '5'])).toBe('20')
})

test('Test 2', () => {
  expect(arrMultiply(['2', '-5'])).toBe('-10')
})

test('Test 3', () => {
  expect(arrMultiply(['9', '0'])).toBe('0')
})
