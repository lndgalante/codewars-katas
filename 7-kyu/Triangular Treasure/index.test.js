const triangular = require('.')

test('Test 1', () => {
  expect(triangular(0)).toBe(0)
})

test('Test 2', () => {
  expect(triangular(2)).toBe(3)
})

test('Test 3', () => {
  expect(triangular(3)).toBe(6)
})

test('Test 4', () => {
  expect(triangular(4)).toBe(10)
})

test('Test 5', () => {
  expect(triangular(-10)).toBe(0)
})
