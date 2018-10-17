const elimination = require('.')

test('Test 1', () => {
  expect(elimination([2, 5, 34, 1, 22, 1])).toBe(1)
})

test('Test 2', () => {
  expect(elimination([2, 2, 34, 1, 22])).toBe(2)
})

test('Test 3', () => {
  expect(elimination([2, 5, 34, 1, 22])).toBeNull()
})
