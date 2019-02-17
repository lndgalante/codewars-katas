const problem = require('.')

test('Test 1', () => {
  expect(problem('hello')).toBe('Error')
})

test('Test 2', () => {
  expect(problem(1)).toBe(56)
})

test('Test 3', () => {
  expect(problem(5)).toBe(256)
})

test('Test 4', () => {
  expect(problem(0)).toBe(6)
})

test('Test 5', () => {
  expect(problem(1.2)).toBe(66)
})

test('Test 6', () => {
  expect(problem(3)).toBe(156)
})

test('Test 7', () => {
  expect(problem('RyanIsCool')).toBe('Error')
})

test('Test 8', () => {
  expect(problem(-3)).toBe(-144)
})

test('Test 9', () => {
  expect(problem('')).toBe('Error')
})

test('Test 10', () => {
  expect(problem(0.03)).toBe(7.5)
})
