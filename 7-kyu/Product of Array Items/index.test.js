const product = require('.')

test('Test 1', () => {
  expect(product([5, 4, 1, 3, 9])).toBe(540)
})

test('Test 2', () => {
  expect(product([-2, 6, 7, 8])).toBe(-672)
})

test('Test 3', () => {
  expect(product([10])).toBe(10)
})

test('Test 4', () => {
  expect(product([0, 2, 9, 7])).toBe(0)
})

test('Test 5', () => {
  expect(product(null)).toBeNull()
})

test('Test 6', () => {
  expect(product([])).toBeNull()
})
