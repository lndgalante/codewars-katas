const add = require('.')

test('Test 1', () => {
  expect(add()).toBe(0)
})

test('Test 2', () => {
  expect(add(100, 200, 300)).toBe(300)
})

test('Test 3', () => {
  expect(add(2)).toBe(2)
})

test('Test 4', () => {
  expect(add(4, -3, -2)).toBe(2)
})

test('Test 5', () => {
  expect(add(-1, -2, -3, -4)).toBe(-4)
})
