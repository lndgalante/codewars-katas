const cutCube = require('.')

test('Test 1', () => {
  expect(cutCube(27, 27)).toBeTrue()
})

test('Test 2', () => {
  expect(cutCube(512, 8)).toBeTrue()
})

test('Test 3', () => {
  expect(cutCube(512, 64)).toBeTrue()
})

test('Test 4', () => {
  expect(cutCube(50000, 50)).toBeFalse()
})

test('Test 5', () => {
  expect(cutCube(432, 16)).toBeFalse()
})

test('Test 6', () => {
  expect(cutCube(256, 8)).toBeFalse()
})

test('Test 7', () => {
  expect(cutCube(27, 3)).toBeFalse()
})

test('Test 8', () => {
  expect(cutCube(123, 456)).toBeFalse()
})

test('Test 9', () => {
  expect(cutCube(27, 8)).toBeFalse()
})
