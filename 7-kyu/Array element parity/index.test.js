const solve = require('.')

test('Test 1', () => {
  expect(solve([1, -1, 2, -2, 3])).toBe(3)
})

test('Test 2', () => {
  expect(solve([-3, 1, 2, 3, -1, -4, -2])).toBe(-4)
})

test('Test 3', () => {
  expect(solve([1, -1, 2, -2, 3, 3])).toBe(3)
})

test('Test 4', () => {
  expect(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])).toBe(-38)
})

test('Test 5', () => {
  expect(solve([-9, -105, -9, -9, -9, -9, 105])).toBe(-9)
})
