const newAvg = require('.')

test('Test 1', () => {
  expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).toBe(628)
})

test('Test 2', () => {
  expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).toBe(645)
})
