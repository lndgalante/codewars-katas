const divide = require('.')

test('Test 1', () => {
  expect(divide(2)).toBeFalsy()
})

test('Test 2', () => {
  expect(divide(3)).toBeFalsy()
})

test('Test 3', () => {
  expect(divide(4)).toBeTruthy()
})

test('Test 4', () => {
  expect(divide(5)).toBeFalsy()
})

test('Test 5', () => {
  expect(divide(6)).toBeTruthy()
})

test('Test 6', () => {
  expect(divide(88)).toBeTruthy()
})

test('Test 7', () => {
  expect(divide(100)).toBeTruthy()
})

test('Test 8', () => {
  expect(divide(67)).toBeFalsy()
})

test('Test 9', () => {
  expect(divide(90)).toBeTruthy()
})

test('Test 10', () => {
  expect(divide(10)).toBeTruthy()
})

test('Test 11', () => {
  expect(divide(99)).toBeFalsy()
})

test('Test 12', () => {
  expect(divide(32)).toBeTruthy()
})
