const whatNumberIsIt = require('.')

test('Test 1', () => {
  expect(whatNumberIsIt(1 / 0)).toBe('Input number is Number.POSITIVE_INFINITY')
})

test('Test 2', () => {
  expect(whatNumberIsIt(100)).toBe('Input number is 100')
})

test('Test 3', () => {
  expect(whatNumberIsIt(1.7976931348623157e308)).toBe(
    'Input number is Number.MAX_VALUE'
  )
})

test('Test 4', () => {
  expect(whatNumberIsIt(5e-324)).toBe('Input number is Number.MIN_VALUE')
})

test('Test 5', () => {
  expect(whatNumberIsIt(-Number.MAX_VALUE * 2)).toBe(
    'Input number is Number.NEGATIVE_INFINITY'
  )
})

test('Test 6', () => {
  expect(whatNumberIsIt(NaN)).toBe('Input number is Number.NaN')
})

test('Test 7', () => {
  expect(whatNumberIsIt(Infinity + 1)).toBe(
    'Input number is Number.POSITIVE_INFINITY'
  )
})
