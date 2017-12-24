const find_average = require('./index.js')

test('Test 1', () => {
  expect(find_average([1, 1, 1])).toBe(1)
})

test('Test 2', () => {
  expect(find_average([1, 2, 3])).toBe(2)
})
