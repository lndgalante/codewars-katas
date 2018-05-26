const closeCompare = require('.')

test('Test 1', () => {
  expect(closeCompare(4, 5)).toBe(-1)
})

test('Test 2', () => {
  expect(closeCompare(5, 5)).toBe(0)
})

test('Test 3', () => {
  expect(closeCompare(6, 5)).toBe(1)
})

test('Test 4', () => {
  expect(closeCompare(-6, -5)).toBe(-1)
})

test('Test 5', () => {
  expect(closeCompare(2, 5, 3)).toBe(0)
})

test('Test 6', () => {
  expect(closeCompare(8.1, 5, 3)).toBe(1)
})

test('Test 7', () => {
  expect(closeCompare(1.99, 5, 3)).toBe(-1)
})
