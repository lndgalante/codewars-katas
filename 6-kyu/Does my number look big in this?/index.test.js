const narcissistic = require('.')

test('Test 1', () => {
  expect(narcissistic(7)).toBeTruthy()
})

test('Test 2', () => {
  expect(narcissistic(153)).toBeTruthy()
})

test('Test 3', () => {
  expect(narcissistic(371)).toBeTruthy()
})

test('Test 4', () => {
  expect(narcissistic(1634)).toBeTruthy()
})

test('Test 5', () => {
  expect(narcissistic(10158)).toBeFalsy()
})

test('Test 6', () => {
  expect(narcissistic(30308)).toBeFalsy()
})
