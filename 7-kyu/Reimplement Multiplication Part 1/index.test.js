const mul = require('.')

test('Test 1', () => {
  expect(mul(1, 0)).toBe(0)
})

test('Test 2', () => {
  expect(mul(0, 1)).toBe(0)
})

test('Test 3', () => {
  expect(mul(1, 0)).toBe(0)
})

test('Test 4', () => {
  expect(mul(1, 1)).toBe(1)
})

test('Test 5', () => {
  expect(mul(2, 2)).toBe(4)
})

test('Test 6', () => {
  expect(mul(5, 5)).toBe(25)
})
