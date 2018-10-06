const amIAfraid = require('.')

test('Test 1', () => {
  expect(amIAfraid('Monday', 13)).toBeFalse()
})

test('Test 2', () => {
  expect(amIAfraid('Sunday', -666)).toBeTrue()
})

test('Test 3', () => {
  expect(amIAfraid('Tuesday', 2)).toBeFalse()
})

test('Test 4', () => {
  expect(amIAfraid('Tuesday', 965)).toBeTrue()
})

test('Test 5', () => {
  expect(amIAfraid('Friday', 2)).toBeTrue()
})
