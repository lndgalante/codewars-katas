const arithmetic = require('.')

test('Test 1', () => {
  expect(arithmetic(1, 2, 'add')).toBe(3)
})

test('Test 2', () => {
  expect(arithmetic(8, 2, 'subtract')).toBe(6)
})

test('Test 3', () => {
  expect(arithmetic(5, 2, 'multiply')).toBe(10)
})

test('Test 4', () => {
  expect(arithmetic(8, 2, 'divide')).toBe(4)
})
