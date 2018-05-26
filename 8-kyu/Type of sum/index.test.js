const typeOfSum = require('.')

test('Test 1', () => {
  expect(typeOfSum(12, 1)).toBe('number')
})

test('Test 2', () => {
  expect(typeOfSum('d', 1)).toBe('string')
})

test('Test 3', () => {
  expect(typeOfSum(1, 'a')).toBe('string')
})

test('Test 4', () => {
  expect(typeOfSum('dd', '')).toBe('string')
})

test('Test 5', () => {
  expect(typeOfSum(true, 1)).toBe('number')
})

test('Test 6', () => {
  expect(typeOfSum('s', false)).toBe('string')
})

test('Test 7', () => {
  expect(typeOfSum(null, 1)).toBe('number')
})

test('Test 8', () => {
  expect(typeOfSum('s', null)).toBe('string')
})

test('Test 9', () => {
  expect(typeOfSum(null, undefined)).toBe('number')
})

test('Test 10', () => {
  expect(typeOfSum(undefined, 're')).toBe('string')
})

test('Test 11', () => {
  expect(typeOfSum(undefined, true)).toBe('number')
})

test('Test 12', () => {
  expect(typeOfSum(null, false)).toBe('number')
})
