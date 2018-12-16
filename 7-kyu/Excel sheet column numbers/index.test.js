const titleToNumber = require('.')

test('Test 1', () => {
  expect(titleToNumber('A')).toBe(1)
})

test('Test 2', () => {
  expect(titleToNumber('Z')).toBe(26)
})

test('Test 3', () => {
  expect(titleToNumber('AA')).toBe(27)
})

test('Test 4', () => {
  expect(titleToNumber('AZ')).toBe(52)
})

test('Test 5', () => {
  expect(titleToNumber('BA')).toBe(53)
})

test('Test 6', () => {
  expect(titleToNumber('CODEWARS')).toBe(28779382963)
})
