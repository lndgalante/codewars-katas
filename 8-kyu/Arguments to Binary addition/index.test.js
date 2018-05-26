const arr2bin = require('.')

test('Test 1', () => {
  expect(arr2bin([1, 2])).toBe('11')
})

test('Test 2', () => {
  expect(arr2bin([1, 2, 3, 4, 5])).toBe('1111')
})

test('Test 3', () => {
  expect(arr2bin([1, 10, 100, 1000])).toBe('10001010111')
})

test('Test 4', () => {
  expect(arr2bin([null])).toBe('0')
})

test('Test 5', () => {
  expect(arr2bin([true, true, false, 15])).toBe('1111')
})
