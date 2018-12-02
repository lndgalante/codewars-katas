const pofi = require('.')

test('Test 1', () => {
  expect(pofi(0)).toBe('1')
})

test('Test 2', () => {
  expect(pofi(1)).toBe('i')
})

test('Test 3', () => {
  expect(pofi(2)).toBe('-1')
})

test('Test 4', () => {
  expect(pofi(3)).toBe('-i')
})

test('Test 5', () => {
  expect(pofi(4)).toBe('1')
})

test('Test 6', () => {
  expect(pofi(5)).toBe('i')
})

test('Test 7', () => {
  expect(pofi(6)).toBe('-1')
})

test('Test 8', () => {
  expect(pofi(7)).toBe('-i')
})

test('Test 9', () => {
  expect(pofi(8)).toBe('1')
})

test('Test 10', () => {
  expect(pofi(9)).toBe('i')
})

test('Test 11', () => {
  expect(pofi(10)).toBe('-1')
})
