const isUndefined = require('.')

test('Test 1', () => {
  expect(isUndefined(1)).toBeFalse()
})

test('Test 2', () => {
  expect(isUndefined(2)).toBeFalse()
})

test('Test 3', () => {
  expect(isUndefined(undefined)).toBeTrue()
})

test('Test 4', () => {
  expect(isUndefined(3)).toBeFalse()
})

test('Test 5', () => {
  expect(isUndefined(4)).toBeFalse()
})
