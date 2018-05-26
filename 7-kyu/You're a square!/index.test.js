const isSquare = require('.')

test('Test 1', () => {
  expect(isSquare(-1)).toBeFalsy()
})

test('Test 2', () => {
  expect(isSquare(3)).toBeFalsy()
})

test('Test 3', () => {
  expect(isSquare(4)).toBeTruthy()
})

test('Test 4', () => {
  expect(isSquare(25)).toBeTruthy()
})

test('Test 5', () => {
  expect(isSquare(26)).toBeFalsy()
})
