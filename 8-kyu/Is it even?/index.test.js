const testEven = require('.')

test('Test 1', () => {
  expect(testEven(0)).toBeTruthy()
})

test('Test 2', () => {
  expect(testEven(0.5)).toBeFalsy()
})

test('Test 3', () => {
  expect(testEven(1)).toBeFalsy()
})

test('Test 4', () => {
  expect(testEven(2)).toBeTruthy()
})

test('Test 5', () => {
  expect(testEven(-4)).toBeTruthy()
})
