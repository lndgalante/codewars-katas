const reverseNumber = require('.')

test('Test 1', () => {
  expect(reverseNumber(123)).toBe(321)
})

test('Test 2', () => {
  expect(reverseNumber(-123)).toBe(-321)
})

test('Test 3', () => {
  expect(reverseNumber(1000)).toBe(1)
})

test('Test 4', () => {
  expect(reverseNumber(4321234)).toBe(4321234)
})

test('Test 5', () => {
  expect(reverseNumber(5)).toBe(5)
})

test('Test 6', () => {
  expect(reverseNumber(0)).toBe(0)
})

test('Test 7', () => {
  expect(reverseNumber(98989898)).toBe(89898989)
})
