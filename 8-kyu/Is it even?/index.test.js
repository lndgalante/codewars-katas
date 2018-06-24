const testEven = require('.')

test('Test 1', () => {
  expect(testEven(0)).toBeTrue()
})

test('Test 2', () => {
  expect(testEven(0.5)).toBeFalse()
})

test('Test 3', () => {
  expect(testEven(1)).toBeFalse()
})

test('Test 4', () => {
  expect(testEven(2)).toBeTrue()
})

test('Test 5', () => {
  expect(testEven(-4)).toBeTrue()
})
