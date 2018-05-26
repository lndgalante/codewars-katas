const evenOrOdd = require('.')

test('Test 1', () => {
  expect(evenOrOdd(2)).toBe('Even')
})

test('Test 2', () => {
  expect(evenOrOdd(0)).toBe('Even')
})

test('Test 3', () => {
  expect(evenOrOdd(7)).toBe('Odd')
})

test('Test 4', () => {
  expect(evenOrOdd(1)).toBe('Odd')
})
