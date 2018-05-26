const basicOp = require('.')

test('Test 1', () => {
  expect(basicOp('+', 4, 7)).toBe(11)
})

test('Test 2', () => {
  expect(basicOp('-', 15, 18)).toBe(-3)
})

test('Test 3', () => {
  expect(basicOp('*', 5, 5)).toBe(25)
})

test('Test 4', () => {
  expect(basicOp('/', 49, 7)).toBe(7)
})
