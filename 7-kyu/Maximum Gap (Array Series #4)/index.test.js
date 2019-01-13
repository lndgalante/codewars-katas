const maxGap = require('.')

test('Test 1', () => {
  expect(maxGap([13, 10, 2, 9, 5])).toBe(4)
})

test('Test 2', () => {
  expect(maxGap([13, 3, 5])).toBe(8)
})

test('Test 3', () => {
  expect(maxGap([24, 299, 131, 14, 26, 25])).toBe(168)
})

test('Test 4', () => {
  expect(maxGap([-3, -27, -4, -2])).toBe(23)
})

test('Test 5', () => {
  expect(maxGap([-7, -42, -809, -14, -12])).toBe(767)
})

test('Test 6', () => {
  expect(maxGap([12, -5, -7, 0, 290])).toBe(278)
})

test('Test 7', () => {
  expect(maxGap([-54, 37, 0, 64, -15, 640, 0])).toBe(576)
})

test('Test 8', () => {
  expect(maxGap([130, 30, 50])).toBe(80)
})

test('Test 9', () => {
  expect(maxGap([1, 1, 1])).toBe(0)
})

test('Test 10', () => {
  expect(maxGap([-1, -1, -1])).toBe(0)
})
