const dayPlan = require('.')

test('Test 1', () => {
  expect(dayPlan(8, 5, 30)).toEqual([30, 83, 30, 83, 30, 83, 30, 83, 30])
})

test('Test 2', () => {
  expect(dayPlan(2, 2, 60)).toEqual([60, 0, 60])
})

test('Test 3', () => {
  expect(dayPlan(3, 5, 60)).toBe("You're not sleeping tonight!")
})
