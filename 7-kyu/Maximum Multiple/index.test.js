const maxMultiple = require('.')

test('Test 1', () => {
  expect(maxMultiple(2, 7)).toBe(6)
})

test('Test 2', () => {
  expect(maxMultiple(3, 10)).toBe(9)
})

test('Test 3', () => {
  expect(maxMultiple(7, 17)).toBe(14)
})

test('Test 4', () => {
  expect(maxMultiple(10, 50)).toBe(50)
})

test('Test 5', () => {
  expect(maxMultiple(37, 200)).toBe(185)
})

test('Test 6', () => {
  expect(maxMultiple(7, 100)).toBe(98)
})

test('Test 7', () => {
  expect(maxMultiple(37, 100)).toBe(74)
})

test('Test 8', () => {
  expect(maxMultiple(1, 13)).toBe(13)
})

test('Test 9', () => {
  expect(maxMultiple(1, 1)).toBe(1)
})

test('Test 10', () => {
  expect(maxMultiple(4, 1)).toBe(0)
})
