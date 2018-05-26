const isDivisible = require('.')

test('Test 1', () => {
  expect(isDivisible(4050, 27)).toBeTruthy()
})

test('Test 2', () => {
  expect(isDivisible(4066, 27)).toBeFalsy()
})

test('Test 3', () => {
  expect(isDivisible(10000, 20)).toBeTruthy()
})

test('Test 4', () => {
  expect(isDivisible(10005, 20)).toBeFalsy()
})

test('Test 5', () => {
  expect(isDivisible(10005, 1)).toBeTruthy()
})
