const isDivideBy = require('.')

test('Test 1', () => {
  expect(isDivideBy(-12, 2, -6)).toBeTruthy()
})

test('Test 2', () => {
  expect(isDivideBy(-12, 2, -5)).toBeFalsy()
})

test('Test 3', () => {
  expect(isDivideBy(45, 1, 6)).toBeFalsy()
})

test('Test 4', () => {
  expect(isDivideBy(45, 5, 15)).toBeTruthy()
})

test('Test 5', () => {
  expect(isDivideBy(4, 1, 4)).toBeTruthy()
})

test('Test 6', () => {
  expect(isDivideBy(15, -5, 3)).toBeTruthy()
})
