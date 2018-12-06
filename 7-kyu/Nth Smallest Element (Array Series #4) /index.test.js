const nthSmallest = require('.')

test('Test 1', () => {
  expect(nthSmallest([3, 1, 2], 2)).toBe(2)
})

test('Test 2', () => {
  expect(nthSmallest([15, 20, 7, 10, 4, 3], 3)).toBe(7)
})

test('Test 3', () => {
  expect(nthSmallest([-5, -1, -6, -18], 4)).toBe(-1)
})

test('Test 4', () => {
  expect(nthSmallest([-102, -16, -1, -2, -367, -9], 5)).toBe(-2)
})

test('Test 5', () => {
  expect(nthSmallest([2, 169, 13, -5, 0, -1], 4)).toBe(2)
})
