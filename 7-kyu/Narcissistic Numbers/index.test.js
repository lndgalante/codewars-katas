const isNarcissistic = require('.')

test('Test 1', () => {
  expect(isNarcissistic(153)).toBeTrue()
})

test('Test 2', () => {
  expect(isNarcissistic(1)).toBeTrue()
})

test('Test 3', () => {
  expect(isNarcissistic(435)).toBeFalse()
})

test('Test 4', () => {
  expect(isNarcissistic(370)).toBeTrue()
})

test('Test 5', () => {
  expect(isNarcissistic(324)).toBeFalse()
})

test('Test 6', () => {
  expect(isNarcissistic(371)).toBeTrue()
})

test('Test 7', () => {
  expect(isNarcissistic(4328)).toBeFalse()
})

test('Test 8', () => {
  expect(isNarcissistic(407)).toBeTrue()
})

test('Test 9', () => {
  expect(isNarcissistic(407)).toBeTrue()
})
