const finalGrade = require('.')

test('Test 1', () => {
  expect(finalGrade(100, 12)).toBe(100)
})

test('Test 2', () => {
  expect(finalGrade(85, 5)).toBe(90)
})
