const solve = require('.')

test('Test 1', () => {
  expect(solve([0, 1, 2, 3])).toBe(0)
})

test('Test 2', () => {
  expect(solve([0, 1, 2, 3, 'a', 'b'])).toBe(0)
})

test('Test 3', () => {
  expect(solve([0, 15, 'z', 16, 'm', 13, 14, 'c', 9, 10, 13, 'u', 4, 3])).toBe(0)
})

test('Test 4', () => {
  expect(solve([13, 6, 8, 15, 4, 8, 13])).toBe(1)
})

test('Test 5', () => {
  expect(solve([1, 'a', 17, 8, 'e', 3, 'i', 12, 1])).toBe(-2)
})

test('Test 6', () => {
  expect(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9])).toBe(2)
})
