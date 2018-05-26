const binaryArrayToNumber = require('.')

test('Test 1', () => {
  expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1)
})

test('Test 2', () => {
  expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2)
})

test('Test 3', () => {
  expect(binaryArrayToNumber([0, 1, 0, 1])).toBe(5)
})

test('Test 4', () => {
  expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6)
})

test('Test 5', () => {
  expect(binaryArrayToNumber([1, 0, 0, 1])).toBe(9)
})

test('Test 6', () => {
  expect(binaryArrayToNumber([1, 0, 1, 1])).toBe(11)
})

test('Test 7', () => {
  expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15)
})
