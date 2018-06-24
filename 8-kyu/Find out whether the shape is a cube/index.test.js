const cubeChecker = require('.')

test('Test 1', () => {
  expect(cubeChecker(56.3, 1)).toBeFalse()
})

test('Test 2', () => {
  expect(cubeChecker(-1, 2)).toBeFalse()
})

test('Test 3', () => {
  expect(cubeChecker(8, 3)).toBeFalse()
})

test('Test 4', () => {
  expect(cubeChecker(8, 2)).toBeTrue()
})

test('Test 5', () => {
  expect(cubeChecker(-8, -2)).toBeFalse()
})

test('Test 6', () => {
  expect(cubeChecker(0, 0)).toBeFalse()
})

test('Test 7', () => {
  expect(cubeChecker(1, 5)).toBeFalse()
})

test('Test 8', () => {
  expect(cubeChecker(125, 5)).toBeTrue()
})

test('Test 9', () => {
  expect(cubeChecker(125, -5)).toBeFalse()
})
