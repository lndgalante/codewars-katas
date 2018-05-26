const calculator = require('.')

test('Test 1', () => {
  expect(calculator(1, 2, '+')).toBe(3)
})

test('Test 2', () => {
  expect(calculator(1, 2, '-')).toBe(-1)
})

test('Test 3', () => {
  expect(calculator(3, 5, '*')).toBe(15)
})

test('Test 4', () => {
  expect(calculator(6, 2, '/')).toBe(3)
})

test('Test 5', () => {
  expect(calculator(6, 2, '$')).toBe('unknown value')
})

test('Test 6', () => {
  expect(calculator(6, 'h', '*')).toBe('unknown value')
})
