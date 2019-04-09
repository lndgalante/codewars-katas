const isNegativeZero = require('.')

test('Test 1', () => {
  expect(isNegativeZero(-0)).toBeTrue()
})

test('Test 2', () => {
  expect(isNegativeZero(-Infinity)).toBeFalse()
})

test('Test 3', () => {
  expect(isNegativeZero(-5)).toBeFalse()
})

test('Test 4', () => {
  expect(isNegativeZero(-4)).toBeFalse()
})

test('Test 5', () => {
  expect(isNegativeZero(-3)).toBeFalse()
})

test('Test 6', () => {
  expect(isNegativeZero(-2)).toBeFalse()
})

test('Test 7', () => {
  expect(isNegativeZero(-1)).toBeFalse()
})

test('Test 8', () => {
  expect(isNegativeZero(-Number.MIN_VALUE)).toBeFalse()
})

test('Test 9', () => {
  expect(isNegativeZero(0)).toBeFalse()
})

test('Test 10', () => {
  expect(isNegativeZero(Number.MIN_VALUE)).toBeFalse()
})
