const twoCount = require('.')

test('Test 1', () => {
  expect(twoCount(24)).toBe(3)
})

test('Test 2', () => {
  expect(twoCount(17280)).toBe(7)
})

test('Test 3', () => {
  expect(twoCount(222222222222)).toBe(1)
})

test('Test 4', () => {
  expect(twoCount(256)).toBe(8)
})

test('Test 5', () => {
  expect(twoCount(1)).toBe(0)
})

test('Test 6', () => {
  expect(twoCount(2)).toBe(1)
})

test('Test 7', () => {
  expect(twoCount(256)).toBe(8)
})

test('Test 8', () => {
  expect(twoCount(7)).toBe(0)
})

test('Test 9', () => {
  expect(twoCount(84934656)).toBe(20)
})
