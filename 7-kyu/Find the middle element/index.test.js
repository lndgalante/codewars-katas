const gimme = require('./index')

test('Test 1', () => {
  expect(gimme([2, 3, 1])).toBe(0)
})

test('Test 2', () => {
  expect(gimme([5, 10, 14])).toBe(1)
})
