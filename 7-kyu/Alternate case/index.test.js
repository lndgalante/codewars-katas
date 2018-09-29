const alternateCase = require('.')

test('Test 1', () => {
  expect(alternateCase('abc')).toBe('ABC')
})

test('Test 2', () => {
  expect(alternateCase('ABC')).toBe('abc')
})

test('Test 3', () => {
  expect(alternateCase('Hello World')).toBe('hELLO wORLD')
})
