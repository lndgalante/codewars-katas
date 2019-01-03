const maxTriSum = require('.')

test('Test 1', () => {
  expect(maxTriSum([3, 2, 6, 8, 2, 3])).toBe(17)
})

test('Test 2', () => {
  expect(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])).toBe(32)
})

test('Test 3', () => {
  expect(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])).toBe(18)
})

test('Test 4', () => {
  expect(maxTriSum([-3, -27, -4, -2, -27, -2])).toBe(-9)
})

test('Test 5', () => {
  expect(maxTriSum([-14, -12, -7, -42, -809, -14, -12])).toBe(-33)
})

test('Test 6', () => {
  expect(maxTriSum([-14, -12, -7, -42, -809, -14, -12])).toBe(-33)
})

test('Test 7', () => {
  expect(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])).toBe(232)
})

test('Test 8', () => {
  expect(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])).toBe(41)
})

test('Test 9', () => {
  expect(maxTriSum([-2, 0, 2])).toBe(0)
})

test('Test 10', () => {
  expect(maxTriSum([-2, -4, 0, -9, 2])).toBe(0)
})

test('Test 11', () => {
  expect(maxTriSum([-5, -1, -9, 0, 2])).toBe(1)
})
