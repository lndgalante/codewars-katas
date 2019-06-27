const { multi, add } = require('.')

test('Test 1', () => {
  expect(multi([5, 1, 5])).toBe(25)
})

test('Test 2', () => {
  expect(add([9, 8, 5])).toBe(22)
})
