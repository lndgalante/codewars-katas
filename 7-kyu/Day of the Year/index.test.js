const toDayOfYear = require('.')

test('Test 1', () => {
  expect(toDayOfYear([25, 12, 2017])).toBe(359)
})

test('Test 2', () => {
  expect(toDayOfYear([31, 10, 1991])).toBe(304)
})

test('Test 3', () => {
  expect(toDayOfYear([1, 5, 3000])).toBe(121)
})

test('Test 4', () => {
  expect(toDayOfYear([14, 3, 1066])).toBe(73)
})

test('Test 5', () => {
  expect(toDayOfYear([5, 11, 1604])).toBe(310)
})

test('Test 6', () => {
  expect(toDayOfYear([31, 12, 2000])).toBe(366)
})

test('Test 7', () => {
  expect(toDayOfYear([31, 12, 2001])).toBe(365)
})

test('Test 8', () => {
  expect(toDayOfYear([31, 12, 2004])).toBe(366)
})

test('Test 9', () => {
  expect(toDayOfYear([31, 12, 2100])).toBe(365)
})
