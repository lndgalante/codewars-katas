const nextBirthdayOfTheWeek = require('.')

test('Test 1', () => {
  expect(nextBirthdayOfTheWeek(new Date(1990, 10, 16))).toBe(11)
})

test('Test 2', () => {
  expect(nextBirthdayOfTheWeek(new Date(2012, 5, 20))).toBe(6)
})
