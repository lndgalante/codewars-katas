const checkForFactor = require('.')

test('Test 1', () => {
  expect(checkForFactor(10, 2)).toBeTruthy()
})

test('Test 2', () => {
  expect(checkForFactor(63, 7)).toBeTruthy()
})

test('Test 3', () => {
  expect(checkForFactor(2450, 5)).toBeTruthy()
})

test('Test 4', () => {
  expect(checkForFactor(24612, 3)).toBeTruthy()
})
