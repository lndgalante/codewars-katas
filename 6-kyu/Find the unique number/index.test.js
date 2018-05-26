const findUniq = require('.')

test('Test 1', () => {
  expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2)
})

test('Test 2', () => {
  expect(findUniq([0, 0, 0.55, 0, 0])).toBe(0.55)
})

test('Test 3', () => {
  expect(findUniq([0, 1, 0])).toBe(1)
})

test('Test 4', () => {
  expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2)
})

test('Test 5', () => {
  expect(findUniq([3, 10, 3, 3, 3])).toBe(10)
})
