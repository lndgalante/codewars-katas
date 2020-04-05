const sumCubes = require('.')

test('Test 1', () => {
  expect(sumCubes(1)).toBe(1)
})

test('Test 2', () => {
  expect(sumCubes(2)).toBe(9)
})

test('Test 3', () => {
  expect(sumCubes(3)).toBe(36)
})

test('Test 4', () => {
  expect(sumCubes(4)).toBe(100)
})

test('Test 5', () => {
  expect(sumCubes(10)).toBe(3025)
})

test('Test 6', () => {
  expect(sumCubes(123)).toBe(58155876)
})
