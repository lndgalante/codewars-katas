const humanReadable = require('./index.js')

test('Test 1', () => {
  expect(humanReadable(0)).toBe('00:00:00')
})

test('Test 2', () => {
  expect(humanReadable(5)).toBe('00:00:05')
})

test('Test 3', () => {
  expect(humanReadable(60)).toBe('00:01:00')
})

test('Test 4', () => {
  expect(humanReadable(86399)).toBe('23:59:59')
})

test('Test 5', () => {
  expect(humanReadable(359999)).toBe('99:59:59')
})
