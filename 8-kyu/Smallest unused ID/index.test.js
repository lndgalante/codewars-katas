const nextId = require('.')

test('Test 1', () => {
  expect(nextId([0, 1, 2, 3, 5])).toBe(4)
})

test('Test 2', () => {
  expect(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(11)
})
