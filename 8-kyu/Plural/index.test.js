const plural = require('.')

test('Test 1', () => {
  expect(plural(0)).toBeTruthy()
})

test('Test 2', () => {
  expect(plural(0.5)).toBeTruthy()
})

test('Test 3', () => {
  expect(plural(1)).toBeFalsy()
})

test('Test 4', () => {
  expect(plural(100)).toBeTruthy()
})

test('Test 5', () => {
  expect(plural(Infinity)).toBeTruthy()
})
