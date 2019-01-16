const gap = require('.')

test('Test 1', () => {
  expect(gap(9)).toBe(2)
})

test('Test 2', () => {
  expect(gap(529)).toBe(4)
})

test('Test 3', () => {
  expect(gap(20)).toBe(1)
})

test('Test 4', () => {
  expect(gap(15)).toBe(0)
})
