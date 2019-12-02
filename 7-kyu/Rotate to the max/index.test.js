const rotateToMax = require('.')

test('Test 1', () => {
  expect(rotateToMax(123)).toBe(321)
})

test('Test 2', () => {
  expect(rotateToMax(786)).toBe(876)
})

test('Test 3', () => {
  expect(rotateToMax('001')).toBe(100)
})

test('Test 4', () => {
  expect(rotateToMax(999)).toBe(999)
})

test('Test 5', () => {
  expect(rotateToMax(10543)).toBe(54310)
})
