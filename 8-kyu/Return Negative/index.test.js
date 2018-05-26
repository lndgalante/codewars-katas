const makeNegative = require('.')

test('Test 1', () => {
  expect(makeNegative(42)).toBe(-42)
})

test('Test 2', () => {
  expect(makeNegative(1)).toBe(-1)
})

test('Test 3', () => {
  expect(makeNegative(-5)).toBe(-5)
})

test('Test 4', () => {
  expect(makeNegative(0)).toBe(0)
})
