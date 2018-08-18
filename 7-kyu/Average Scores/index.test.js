const average = require('.')

test('Test 1', () => {
  expect(average([49, 3, 5, 300, 7])).toBe(73)
})

test('Test 2', () => {
  expect(average([90, 98, 89, 100, 100, 86, 94])).toBe(94)
})
