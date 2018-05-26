const cutCube = require('.')

test('Test 1', () => {
  expect(cutCube(27, 27)).toBeTruthy()
})

test('Test 2', () => {
  expect(cutCube(512, 8)).toBeTruthy()
})

test('Test 3', () => {
  expect(cutCube(512, 64)).toBeTruthy()
})

test('Test 4', () => {
  expect(cutCube(50000, 50)).toBeFalsy()
})

test('Test 5', () => {
  expect(cutCube(432, 16)).toBeFalsy()
})

test('Test 6', () => {
  expect(cutCube(256, 8)).toBeFalsy()
})

test('Test 7', () => {
  expect(cutCube(27, 3)).toBeFalsy()
})

test('Test 8', () => {
  expect(cutCube(123, 456)).toBeFalsy()
})

test('Test 9', () => {
  expect(cutCube(27, 8)).toBeFalsy()
})
