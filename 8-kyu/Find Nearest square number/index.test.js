const nearestSq = require('.')

test('Test 1', () => {
  expect(nearestSq(1)).toBe(1)
})

test('Test 2', () => {
  expect(nearestSq(1)).toBe(1)
})

test('Test 3', () => {
  expect(nearestSq(10)).toBe(9)
})

test('Test 4', () => {
  expect(nearestSq(111)).toBe(121)
})

test('Test 5', () => {
  expect(nearestSq(9999)).toBe(10000)
})
