const getNumberFromString = require('.')

test('Test 1', () => {
  expect(getNumberFromString('1')).toBe(1)
})

test('Test 2', () => {
  expect(getNumberFromString('123')).toBe(123)
})

test('Test 3', () => {
  expect(getNumberFromString('this is number: 7')).toBe(7)
})
