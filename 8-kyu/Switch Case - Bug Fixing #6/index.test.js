const evalObject = require('.')

test('Test 1', () => {
  expect(evalObject({ a: 1, b: 1, operation: '+' })).toBe(2)
})

test('Test 2', () => {
  expect(evalObject({ a: 1, b: 1, operation: '-' })).toBe(0)
})

test('Test 3', () => {
  expect(evalObject({ a: 1, b: 1, operation: '/' })).toBe(1)
})

test('Test 4', () => {
  expect(evalObject({ a: 1, b: 1, operation: '*' })).toBe(1)
})

test('Test 5', () => {
  expect(evalObject({ a: 1, b: 1, operation: '%' })).toBe(0)
})

test('Test 6', () => {
  expect(evalObject({ a: 1, b: 1, operation: '^' })).toBe(1)
})
