const narcissistic = require('.')

test('Test 1', () => {
  expect(narcissistic(7)).toBeTrue()
})

test('Test 2', () => {
  expect(narcissistic(153)).toBeTrue()
})

test('Test 3', () => {
  expect(narcissistic(371)).toBeTrue()
})

test('Test 4', () => {
  expect(narcissistic(1634)).toBeTrue()
})

test('Test 5', () => {
  expect(narcissistic(10158)).toBeFalse()
})

test('Test 6', () => {
  expect(narcissistic(30308)).toBeFalse()
})
