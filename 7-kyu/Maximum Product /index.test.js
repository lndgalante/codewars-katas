const adjacentElementsProduct = require('.')

test('Test 1', () => {
  expect(adjacentElementsProduct([5, 8])).toBe(40)
})

test('Test 2', () => {
  expect(adjacentElementsProduct([1, 2, 3])).toBe(6)
})

test('Test 3', () => {
  expect(adjacentElementsProduct([1, 5, 10, 9])).toBe(90)
})

test('Test 4', () => {
  expect(adjacentElementsProduct([4, 12, 3, 1, 5])).toBe(48)
})

test('Test 5', () => {
  expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6)
})

test('Test 9', () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21)
})

test('Test 10', () => {
  expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50)
})

test('Test 11', () => {
  expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toBe(30)
})

test('Test 12', () => {
  expect(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])).toBe(-14)
})

test('Test 13', () => {
  expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6)
})
