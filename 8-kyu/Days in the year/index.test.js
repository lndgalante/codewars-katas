const yearDays = require('.')

test('Test 1', () => {
  expect(yearDays(0)).toBe('0 has 366 days')
})

test('Test 2', () => {
  expect(yearDays(-64)).toBe('-64 has 366 days')
})

test('Test 3', () => {
  expect(yearDays(2016)).toBe('2016 has 366 days')
})

test('Test 4', () => {
  expect(yearDays(1974)).toBe('1974 has 365 days')
})

test('Test 5', () => {
  expect(yearDays(-10)).toBe('-10 has 365 days')
})

test('Test 6', () => {
  expect(yearDays(666)).toBe('666 has 365 days')
})

test('Test 7', () => {
  expect(yearDays(1857)).toBe('1857 has 365 days')
})
