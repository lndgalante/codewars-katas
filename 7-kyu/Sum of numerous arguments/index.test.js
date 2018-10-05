const findSum = require('.')

test('Test 1', () => {
  expect(findSum(1, 3, 5)).toBe(9)
})

test('Test 2', () => {
  expect(findSum(0, 3, 9, 2)).toBe(14)
})

test('Test 3', () => {
  expect(findSum()).toBe(0)
})

test('Test 4', () => {
  expect(findSum(1, -2, 4)).toBe(-1)
})

test('Test 5', () => {
  expect(findSum(0)).toBe(0)
})
