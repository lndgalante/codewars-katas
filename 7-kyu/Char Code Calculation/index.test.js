const calc = require('.')

test('Test 1', () => {
  expect(calc('ABC')).toBe(6)
})

test('Test 2', () => {
  expect(calc('abcdef')).toBe(6)
})

test('Test 3', () => {
  expect(calc('ifkhchlhfd')).toBe(6)
})

test('Test 4', () => {
  expect(calc('aaaaaddddr')).toBe(30)
})

test('Test 5', () => {
  expect(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(96)
})
