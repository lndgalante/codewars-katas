const maxProduct = require('.')

test('Test 1', () => {
  expect(maxProduct([4, 3, 5], 2)).toBe(20)
})

test('Test 2', () => {
  expect(maxProduct([10, 8, 7, 9], 3)).toBe(720)
})

test('Test 3', () => {
  expect(maxProduct([8, 6, 4, 6], 3)).toBe(288)
})

test('Test 4', () => {
  expect(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)).toBe(9600)
})

test('Test 5', () => {
  expect(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)).toBe(247895375)
})

test('Test 6', () => {
  expect(maxProduct([-4, -27, -15, -6, -1], 2)).toBe(4)
})

test('Test 7', () => {
  expect(maxProduct([-17, -8, -102, -309], 2)).toBe(136)
})

test('Test 8', () => {
  expect(maxProduct([10, 3, -27, -1], 3)).toBe(-30)
})

test('Test 9', () => {
  expect(maxProduct([14, 29, -28, 39, -16, -48], 4)).toBe(-253344)
})

test('Test 10', () => {
  expect(maxProduct([1], 1)).toBe(1)
})
