const binToDec = require('.')

test('Test 1', () => {
  expect(binToDec('1')).toBe(1)
})

test('Test 2', () => {
  expect(binToDec('0')).toBe(0)
})

test('Test 3', () => {
  expect(binToDec('1001001')).toBe(73)
})
