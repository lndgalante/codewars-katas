const change = require('.')

test('Test 1', () => {
  expect(change('Superman', [1.1, 2.2, 3.3], 10)).toBe(3.4)
})

test('Test 2', () => {
  expect(change('Superman', [1.12, 2.24, 3.3], 10)).toBe(3.34)
})

test('Test 3', () => {
  expect(change('Superman', [11], 10)).toBe(-1)
})

test('Test 4', () => {
  expect(change('John', [1.1, 2.2, 3.3], 10)).toBe(3.8)
})

test('Test 5', () => {
  expect(change('John', [1.12, 2.24, 3.3], 10)).toBe(3.68)
})
