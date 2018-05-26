const cookingTime = require('.')

test('Test 1', () => {
  expect(cookingTime(0)).toBe(0)
})

test('Test 2', () => {
  expect(cookingTime(5)).toBe(5)
})

test('Test 3', () => {
  expect(cookingTime(10)).toBe(10)
})
