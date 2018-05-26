const shortendToDate = require('.')

test('Test 1', () => {
  expect(shortendToDate('Friday May 2, 9am')).toBe('Friday May 2')
})

test('Test 2', () => {
  expect(shortendToDate('Tuesday January 29, 10pm')).toBe('Tuesday January 29')
})

test('Test 3', () => {
  expect(shortendToDate('Monday December 25, 10pm')).toBe('Monday December 25')
})
