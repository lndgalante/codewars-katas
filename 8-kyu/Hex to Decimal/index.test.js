const hexToDec = require('.')

test('Test 1', () => {
  expect(hexToDec('1')).toBe(1)
})

test('Test 2', () => {
  expect(hexToDec('a')).toBe(10)
})

test('Test 3', () => {
  expect(hexToDec('10')).toBe(16)
})

test('Test 4', () => {
  expect(hexToDec('FF')).toBe(255)
})

test('Test 5', () => {
  expect(hexToDec('-C')).toBe(-12)
})
