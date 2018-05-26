const stringToNumber = require('.')

test('Test 1', () => {
  expect(stringToNumber('1234')).toBe(1234)
})

test('Test 2', () => {
  expect(stringToNumber('605')).toBe(605)
})

test('Test 3', () => {
  expect(stringToNumber('1405')).toBe(1405)
})

test('Test 4', () => {
  expect(stringToNumber('-7')).toBe(-7)
})
