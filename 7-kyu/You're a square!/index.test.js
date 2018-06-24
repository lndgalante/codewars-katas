const isSquare = require('.')

test('Test 1', () => {
  expect(isSquare(-1)).toBeFalse()
})

test('Test 2', () => {
  expect(isSquare(3)).toBeFalse()
})

test('Test 3', () => {
  expect(isSquare(4)).toBeTrue()
})

test('Test 4', () => {
  expect(isSquare(25)).toBeTrue()
})

test('Test 5', () => {
  expect(isSquare(26)).toBeFalse()
})
