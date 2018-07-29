const isLeapYear = require('.')

test('Test 1', () => {
  expect(isLeapYear(1234)).toBeFalse()
})

test('Test 2', () => {
  expect(isLeapYear(1984)).toBeTrue()
})

test('Test 3', () => {
  expect(isLeapYear(2000)).toBeTrue()
})

test('Test 4', () => {
  expect(isLeapYear(2010)).toBeFalse()
})

test('Test 5', () => {
  expect(isLeapYear(2013)).toBeFalse()
})
