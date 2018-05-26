const nthEven = require('.')

test('Test 1', () => {
  expect(nthEven(1)).toBe(0)
})

test('Test 2', () => {
  expect(nthEven(2)).toBe(2)
})

test('Test 3', () => {
  expect(nthEven(3)).toBe(4)
})

test('Test 4', () => {
  expect(nthEven(100)).toBe(198)
})

test('Test 5', () => {
  expect(nthEven(1298734)).toBe(2597466)
})
