const even_or_odd = require('./index.js')

test('Test 1', () => {
  expect(even_or_odd(2)).toBe('Even')
})

test('Test 2', () => {
  expect(even_or_odd(0)).toBe('Even')
})

test('Test 3', () => {
  expect(even_or_odd(7)).toBe('Odd')
})

test('Test 4', () => {
  expect(even_or_odd(1)).toBe('Odd')
})
