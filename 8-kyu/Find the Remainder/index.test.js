const remainder = require('.')

test('Test 1', () => {
  expect(remainder(17, 5)).toBe(2)
})

test('Test 2', () => {
  expect(remainder(13, 72)).toBe(remainder(72, 13))
})

test('Test 3', () => {
  expect(remainder(1, 0)).toBeNaN()
})

test('Test 4', () => {
  expect(remainder(0, 0)).toBeNaN()
})
