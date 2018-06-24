const divide = require('.')

test('Test 1', () => {
  expect(divide(2)).toBeFalse()
})

test('Test 2', () => {
  expect(divide(3)).toBeFalse()
})

test('Test 3', () => {
  expect(divide(4)).toBeTrue()
})

test('Test 4', () => {
  expect(divide(5)).toBeFalse()
})

test('Test 5', () => {
  expect(divide(6)).toBeTrue()
})

test('Test 6', () => {
  expect(divide(88)).toBeTrue()
})

test('Test 7', () => {
  expect(divide(100)).toBeTrue()
})

test('Test 8', () => {
  expect(divide(67)).toBeFalse()
})

test('Test 9', () => {
  expect(divide(90)).toBeTrue()
})

test('Test 10', () => {
  expect(divide(10)).toBeTrue()
})

test('Test 11', () => {
  expect(divide(99)).toBeFalse()
})

test('Test 12', () => {
  expect(divide(32)).toBeTrue()
})
