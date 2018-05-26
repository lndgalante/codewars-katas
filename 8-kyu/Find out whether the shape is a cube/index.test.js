const cubeChecker = require('.')

test('Test 1', () => {
  expect(cubeChecker(56.3, 1)).toBeFalsy()
})

test('Test 2', () => {
  expect(cubeChecker(-1, 2)).toBeFalsy()
})

test('Test 3', () => {
  expect(cubeChecker(8, 3)).toBeFalsy()
})

test('Test 4', () => {
  expect(cubeChecker(8, 2)).toBeTruthy()
})

test('Test 5', () => {
  expect(cubeChecker(-8, -2)).toBeFalsy()
})

test('Test 6', () => {
  expect(cubeChecker(0, 0)).toBeFalsy()
})

test('Test 7', () => {
  expect(cubeChecker(1, 5)).toBeFalsy()
})

test('Test 8', () => {
  expect(cubeChecker(125, 5)).toBeTruthy()
})

test('Test 9', () => {
  expect(cubeChecker(125, -5)).toBeFalsy()
})
