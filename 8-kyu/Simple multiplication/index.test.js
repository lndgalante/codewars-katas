const singleMultiplication = require('.')

test('Test 1', () => {
  expect(singleMultiplication(2)).toBe(16)
})

test('Test 2', () => {
  expect(singleMultiplication(1)).toBe(9)
})

test('Test 3', () => {
  expect(singleMultiplication(8)).toBe(64)
})

test('Test 4', () => {
  expect(singleMultiplication(4)).toBe(32)
})

test('Test 5', () => {
  expect(singleMultiplication(5)).toBe(45)
})
